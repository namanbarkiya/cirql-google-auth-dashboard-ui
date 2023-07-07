import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    line: [
        {
            name: "Guest",
            data: [50, 64, 48, 66, 49, 68],
            color: "#E9A0A0",
        },
        {
            name: "User",
            data: [30, 40, 24, 46, 20, 46],
            color: "#9BDD7C",
        },
    ],
    pie: [70, 10, 20],
};

export const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {
        setLineChart: (state, action) => {
            const { guestData, userData } = action.payload;
            state.line[0].data = guestData;
            state.line[1].data = userData;
        },
        setPieChart: (state, action) => {
            state.pie = action.payload.pieData;
        },
    },
});

export const selectChart = (state: any) => state.chart;

export const { setLineChart, setPieChart } = chartSlice.actions;
export default chartSlice.reducer;
