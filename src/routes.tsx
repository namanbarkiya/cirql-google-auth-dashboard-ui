// Admin Imports
import DashboardPage from "./pages/dashboard-page";

// Auth Imports
import LoginPage from "./pages/login-page";

// Icon Imports
import { MdOutlineDashboard, MdLockOutline } from "react-icons/md";

const routes = [
    {
        name: "Dashboard",
        layout: "/dashboard",
        path: "default",
        icon: <MdOutlineDashboard className="h-6 w-6" />,
        component: <DashboardPage />,
    },
    {
        name: "Sign In",
        layout: "/auth",
        path: "sign-in",
        icon: <MdLockOutline className="h-6 w-6" />,
        component: <LoginPage />,
    },
];
export default routes;
