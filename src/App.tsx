import "./App.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import DashboardLayout from "./layout/dashboard-layout";
import { selectUser } from "./store/reducer/userReducer";
import { useEffect, useState } from "react";

function App() {
    const isAuthenticated = useSelector(selectUser);
    const [signed, setSigned] = useState(isAuthenticated.is_logged_in);

    useEffect(() => {
        setSigned(isAuthenticated.is_logged_in);
    }, [isAuthenticated]);

    return (
        <BrowserRouter basename="/">
            <Routes>
                {signed ? (
                    <Route
                        path="auth/*"
                        element={<Navigate to="/dashboard/default" />}
                    />
                ) : (
                    <Route path="auth/*" element={<LoginPage />} />
                )}
                {signed ? (
                    <Route path="dashboard/*" element={<DashboardLayout />} />
                ) : (
                    <Route
                        path="dashboard/*"
                        element={<Navigate to="/auth/sign-in" />}
                    />
                )}
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
