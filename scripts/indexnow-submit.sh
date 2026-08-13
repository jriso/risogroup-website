#!/usr/bin/env bash
#
# Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver).
#
# Usage:
#   scripts/indexnow-submit.sh https://risogroup.co/insights/some-post ...
#   scripts/indexnow-submit.sh --all      # everything in sitemap.xml
#
# The key file must be live at https://risogroup.co/$KEY.txt before this
# will be accepted. Google does not participate in IndexNow.

set -euo pipefail

HOST="risogroup.co"
KEY="73d80bb27414ca1848b193edc9af1d1e"
ENDPOINT="https://api.indexnow.org/indexnow"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

urls=()
if [[ "${1:-}" == "--all" ]]; then
    while IFS= read -r url; do
        urls+=("$url")
    # Portable tag stripping: BSD sed has no \? operator, so match each tag.
    done < <(grep -o '<loc>[^<]*</loc>' "$REPO_ROOT/sitemap.xml" \
        | sed -e 's|<loc>||' -e 's|</loc>||')
else
    urls=("$@")
fi

if [[ ${#urls[@]} -eq 0 ]]; then
    echo "No URLs to submit."
    exit 0
fi

# The key file must be reachable, or IndexNow rejects the whole batch with 403.
key_url="https://$HOST/$KEY.txt"
if [[ "$(curl -fsS "$key_url" 2>/dev/null || true)" != "$KEY" ]]; then
    echo "ERROR: key file not serving the expected value at $key_url" >&2
    exit 1
fi

echo "Submitting ${#urls[@]} URL(s) to IndexNow:"
printf '  %s\n' "${urls[@]}"

payload="$(jq -n \
    --arg host "$HOST" \
    --arg key "$KEY" \
    --arg keyLocation "$key_url" \
    --args '{host: $host, key: $key, keyLocation: $keyLocation, urlList: $ARGS.positional}' \
    -- "${urls[@]}")"

status="$(curl -sS -o /tmp/indexnow-response -w '%{http_code}' \
    -X POST "$ENDPOINT" \
    -H 'Content-Type: application/json; charset=utf-8' \
    -d "$payload")"

echo "HTTP $status"
cat /tmp/indexnow-response 2>/dev/null && echo

# 200 = accepted, 202 = accepted pending key validation. Everything else fails.
case "$status" in
    200|202) echo "OK" ;;
    400) echo "Bad request: malformed payload." >&2; exit 1 ;;
    403) echo "Forbidden: key not valid or not retrievable." >&2; exit 1 ;;
    422) echo "Unprocessable: a URL does not belong to $HOST." >&2; exit 1 ;;
    429) echo "Rate limited. Treating as non-fatal." >&2; exit 0 ;;
    *)   echo "Unexpected status $status" >&2; exit 1 ;;
esac
