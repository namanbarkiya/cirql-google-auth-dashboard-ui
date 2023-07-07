import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import chartReducer from "./reducer/chartReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        chart: chartReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { user: UserState }
export type AppDispatch = typeof store.dispatch;
