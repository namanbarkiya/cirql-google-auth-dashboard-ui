export const lineChartDataTotalSpent = [
    {
        name: "Revenue",
        data: [50, 64, 48, 66, 49, 68],
        color: "#4318FF",
    },
    {
        name: "Profit",
        data: [30, 40, 24, 46, 20, 46],
        color: "#6AD2FF",
    },
];

export const lineChartOptionsTotalSpent = {
    legend: {
        show: false,
    },

    theme: {
        mode: "light",
    },
    chart: {
        type: "line",

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },

    tooltip: {
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
        theme: "dark",
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: "#A3AED0",
                fontSize: "12px",
                fontWeight: "500",
            },
        },
        type: "text",
        range: undefined,
        categories: ["0", "Week 1", "Week 2", "Week 3", "Week 4"],
    },

    yaxis: {
        show: true,
    },
};

export const pieChartOptions = {
    labels: ["Your files", "System", "Empty"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#98D89E", "#F6DC7D", "#EE8484"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
    },
};

export const pieChartData = [63, 25, 12];
