import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
// import DashboardPage from "./pages/dashboard-page";
import DashboardLayout from "./layout/dashboard-layout";

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="auth/*" element={<LoginPage />} />
                <Route path="dashboard/*" element={<DashboardLayout />} />
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
