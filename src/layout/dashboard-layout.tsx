// import React from "react";
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "../components/navbar";
// import Sidebar from "components/sidebar";
import routes from "../routes";
import Sidebar from "../components/Sidenav";

export default function DashboardLayout(props: { [x: string]: any }) {
    const { ...rest } = props;
    const location = useLocation();
    const [open, setOpen] = React.useState(true);
    const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

    React.useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);

    React.useEffect(() => {
        getActiveRoute(routes);
    }, [location.pathname]);

    const getActiveRoute = (routes: any): string | boolean => {
        const activeRoute = "Main Dashboard";
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(
                    routes[i].layout + "/" + routes[i].path
                ) !== -1
            ) {
                setCurrentRoute(routes[i].name);
            }
        }
        return activeRoute;
    };

    const getActiveNavbar = (routes: any): string | boolean => {
        const activeNavbar = false;
        for (let i = 0; i < routes.length; i++) {
            if (
                window.location.href.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].secondary;
            }
        }
        return activeNavbar;
    };

    const getRoutes = (routes: any): any => {
        return routes.map((prop: any, key: any) => {
            if (prop.layout === "/dashboard") {
                return (
                    <Route
                        path={`/${prop.path}`}
                        element={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    document.documentElement.dir = "ltr";
    return (
        <div className="flex h-full w-full">
            <Sidebar open={open} onClose={() => setOpen(false)} />
            {/* Navbar & Main Content */}
            <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                {/* Main Content */}
                <main
                    className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
                >
                    {/* Routes */}
                    <div className="h-full">
                        <Navbar
                            onOpenSidenav={() => setOpen(true)}
                            brandText={currentRoute}
                            secondary={getActiveNavbar(routes)}
                            {...rest}
                        />
                        <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                            <Routes>
                                {getRoutes(routes)}

                                <Route
                                    path="/"
                                    element={
                                        <Navigate
                                            to="/dashboard/default"
                                            replace
                                        />
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
