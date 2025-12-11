/**
 * Data Salary Report - Chart Configuration
 * Uses Apache ECharts for interactive box plots
 */

// Placeholder salary data - replace with real data when available
const salaryData = {
    "data-analyst": {
        label: "Data Analyst",
        all: { p25: 75000, p50: 95000, p75: 115000, p90: 130000, p95: 145000 },
        senior: { p25: 95000, p50: 115000, p75: 140000, p90: 160000, p95: 175000 },
        nonSenior: { p25: 65000, p50: 80000, p75: 95000, p90: 110000, p95: 120000 }
    },
    "data-scientist": {
        label: "Data Scientist",
        all: { p25: 110000, p50: 135000, p75: 165000, p90: 190000, p95: 210000 },
        senior: { p25: 145000, p50: 175000, p75: 210000, p90: 240000, p95: 265000 },
        nonSenior: { p25: 95000, p50: 115000, p75: 140000, p90: 160000, p95: 175000 }
    },
    "data-engineer": {
        label: "Data Engineer",
        all: { p25: 115000, p50: 145000, p75: 175000, p90: 200000, p95: 220000 },
        senior: { p25: 150000, p50: 180000, p75: 215000, p90: 245000, p95: 270000 },
        nonSenior: { p25: 100000, p50: 125000, p75: 150000, p90: 170000, p95: 185000 }
    },
    "analytics-engineer": {
        label: "Analytics Engineer",
        all: { p25: 100000, p50: 130000, p75: 160000, p90: 185000, p95: 205000 },
        senior: { p25: 135000, p50: 165000, p75: 195000, p90: 225000, p95: 250000 },
        nonSenior: { p25: 90000, p50: 110000, p75: 135000, p90: 155000, p95: 170000 }
    },
    "ml-engineer": {
        label: "ML Engineer",
        all: { p25: 130000, p50: 160000, p75: 195000, p90: 230000, p95: 260000 },
        senior: { p25: 170000, p50: 205000, p75: 245000, p90: 285000, p95: 315000 },
        nonSenior: { p25: 115000, p50: 140000, p75: 170000, p90: 195000, p95: 215000 }
    },
    "ai-engineer": {
        label: "AI Engineer",
        all: { p25: 140000, p50: 175000, p75: 215000, p90: 260000, p95: 300000 },
        senior: { p25: 185000, p50: 225000, p75: 275000, p90: 325000, p95: 365000 },
        nonSenior: { p25: 120000, p50: 150000, p75: 185000, p90: 220000, p95: 250000 }
    }
};

// Color palette matching site design
const chartColors = {
    primary: '#1a1a1a',
    secondary: '#6c757d',
    accent: '#3182ce',
    light: '#f8f9fa',
    median: '#1a1a1a',
    whisker: '#6c757d'
};

// Individual colors for each role (for visual variety)
const roleColors = {
    'data-analyst': { fill: 'rgba(99, 102, 241, 0.3)', border: '#6366f1' },      // Indigo
    'data-scientist': { fill: 'rgba(16, 185, 129, 0.3)', border: '#10b981' },    // Emerald
    'data-engineer': { fill: 'rgba(245, 158, 11, 0.3)', border: '#f59e0b' },     // Amber
    'analytics-engineer': { fill: 'rgba(236, 72, 153, 0.3)', border: '#ec4899' }, // Pink
    'ml-engineer': { fill: 'rgba(59, 130, 246, 0.3)', border: '#3b82f6' },       // Blue
    'ai-engineer': { fill: 'rgba(139, 92, 246, 0.3)', border: '#8b5cf6' }        // Violet
};

/**
 * Format currency for display
 */
function formatSalary(value) {
    return '$' + value.toLocaleString('en-US');
}

/**
 * Create a horizontal box plot comparing all roles
 * @param {string} containerId - DOM element ID for the chart
 * @param {string[]} roles - Array of role keys to include (defaults to all)
 */
function createOverviewChart(containerId, roles = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const chart = echarts.init(container);

    // Use all roles if none specified
    const roleKeys = roles || Object.keys(salaryData);

    // Prepare data for box plot with individual colors
    // ECharts boxplot format: [min, Q1, median, Q3, max]
    // We'll use: [p25, p25, p50, p75, p95] to show our percentiles
    const boxData = roleKeys.map(key => {
        const d = salaryData[key].all;
        const colors = roleColors[key] || { fill: 'rgba(49, 130, 206, 0.3)', border: '#3182ce' };
        return {
            value: [d.p25, d.p25, d.p50, d.p75, d.p95],
            itemStyle: {
                color: colors.fill,
                borderColor: colors.border
            }
        };
    });

    const labels = roleKeys.map(key => salaryData[key].label);

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const key = roleKeys[params.dataIndex];
                const d = salaryData[key].all;
                return `<strong>${salaryData[key].label}</strong><br/>
                    P95: ${formatSalary(d.p95)}<br/>
                    P90: ${formatSalary(d.p90)}<br/>
                    P75: ${formatSalary(d.p75)}<br/>
                    <strong>Median: ${formatSalary(d.p50)}</strong><br/>
                    P25: ${formatSalary(d.p25)}`;
            },
            backgroundColor: '#fff',
            borderColor: '#e8e8e8',
            borderWidth: 1,
            textStyle: {
                color: chartColors.primary,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            },
            extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.1);'
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: 'Annual Salary (USD)',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                formatter: function(value) {
                    return '$' + (value / 1000) + 'k';
                },
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                color: chartColors.secondary
            },
            axisLine: {
                lineStyle: { color: '#e8e8e8' }
            },
            splitLine: {
                lineStyle: { color: '#f0f0f0' }
            },
            min: function(value) {
                return Math.floor(value.min / 10000) * 10000 - 10000;
            },
            max: function(value) {
                return Math.ceil(value.max / 10000) * 10000 + 10000;
            }
        },
        yAxis: {
            type: 'category',
            data: labels,
            axisLabel: {
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                color: chartColors.primary,
                fontWeight: 500
            },
            axisLine: {
                lineStyle: { color: '#e8e8e8' }
            }
        },
        series: [{
            name: 'Salary Distribution',
            type: 'boxplot',
            data: boxData,
            itemStyle: {
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    borderWidth: 2.5,
                    shadowBlur: 5,
                    shadowColor: 'rgba(0,0,0,0.2)'
                }
            },
            boxWidth: ['40%', '60%']
        }]
    };

    chart.setOption(option);

    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });

    return chart;
}

/**
 * Create a single role chart (for spoke pages) with role-specific colors
 * @param {string} containerId - DOM element ID for the chart
 * @param {string} roleKey - The role to display
 * @param {boolean} showSeniorSplit - Whether to show senior vs non-senior comparison
 */
function createRoleChart(containerId, roleKey, showSeniorSplit = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const chart = echarts.init(container);
    const role = salaryData[roleKey];

    if (!role) {
        console.error('Role not found:', roleKey);
        return;
    }

    let boxData, labels;
    const colors = roleColors[roleKey] || { fill: 'rgba(49, 130, 206, 0.3)', border: '#3182ce' };

    if (showSeniorSplit && role.senior && role.nonSenior) {
        // Show senior vs non-senior comparison with lighter/darker variants
        boxData = [
            {
                value: [role.nonSenior.p25, role.nonSenior.p25, role.nonSenior.p50, role.nonSenior.p75, role.nonSenior.p95],
                itemStyle: { color: colors.fill, borderColor: colors.border }
            },
            {
                value: [role.senior.p25, role.senior.p25, role.senior.p50, role.senior.p75, role.senior.p95],
                itemStyle: { color: colors.fill.replace('0.3', '0.5'), borderColor: colors.border }
            }
        ];
        labels = ['Non-Senior', 'Senior'];
    } else {
        // Show just the overall distribution
        boxData = [
            {
                value: [role.all.p25, role.all.p25, role.all.p50, role.all.p75, role.all.p95],
                itemStyle: { color: colors.fill, borderColor: colors.border }
            }
        ];
        labels = [role.label];
    }

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                let d;
                if (showSeniorSplit) {
                    d = params.dataIndex === 0 ? role.nonSenior : role.senior;
                } else {
                    d = role.all;
                }
                const levelLabel = showSeniorSplit ? labels[params.dataIndex] : role.label;
                return `<strong>${levelLabel}</strong><br/>
                    P95: ${formatSalary(d.p95)}<br/>
                    P90: ${formatSalary(d.p90)}<br/>
                    P75: ${formatSalary(d.p75)}<br/>
                    <strong>Median: ${formatSalary(d.p50)}</strong><br/>
                    P25: ${formatSalary(d.p25)}`;
            },
            backgroundColor: '#fff',
            borderColor: '#e8e8e8',
            borderWidth: 1,
            textStyle: {
                color: chartColors.primary,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            },
            extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.1);'
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: 'Annual Salary (USD)',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                formatter: function(value) {
                    return '$' + (value / 1000) + 'k';
                },
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                color: chartColors.secondary
            },
            axisLine: {
                lineStyle: { color: '#e8e8e8' }
            },
            splitLine: {
                lineStyle: { color: '#f0f0f0' }
            },
            min: function(value) {
                return Math.floor(value.min / 10000) * 10000 - 10000;
            },
            max: function(value) {
                return Math.ceil(value.max / 10000) * 10000 + 10000;
            }
        },
        yAxis: {
            type: 'category',
            data: labels,
            axisLabel: {
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                color: chartColors.primary,
                fontWeight: 500
            },
            axisLine: {
                lineStyle: { color: '#e8e8e8' }
            }
        },
        series: [{
            name: 'Salary Distribution',
            type: 'boxplot',
            data: boxData,
            itemStyle: {
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    borderWidth: 2.5,
                    shadowBlur: 5,
                    shadowColor: 'rgba(0,0,0,0.2)'
                }
            },
            boxWidth: ['40%', '60%']
        }]
    };

    chart.setOption(option);

    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });

    return chart;
}

/**
 * Get summary stats for a role (for display in cards/text)
 */
function getRoleSummary(roleKey) {
    const role = salaryData[roleKey];
    if (!role) return null;

    return {
        label: role.label,
        median: role.all.p50,
        medianFormatted: formatSalary(role.all.p50),
        range: `${formatSalary(role.all.p25)} - ${formatSalary(role.all.p95)}`,
        hasSeniorData: !!(role.senior && role.nonSenior)
    };
}

/**
 * Get all role summaries
 */
function getAllRoleSummaries() {
    return Object.keys(salaryData).map(key => ({
        key: key,
        ...getRoleSummary(key)
    }));
}
