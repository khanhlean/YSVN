import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
    {
        path: "",
        element: lazy(() => import("../Page/index")),
        nested: [
            { path: "/", element: lazy(() => import("../Page/Auth/LoginPage")) },
            { path: "stockrating", element: lazy(() => import("../Page/stockrating/index")) },
            { path: "khao-sat", element: lazy(() => import("../Page/KhaoSat/khao_sat")) },
            { path: "wealth", element: lazy(() => import("../Page/wealth/index")) },
        ]
    },

    // {
    //     path: "admin",
    //     element: lazy(() => import("../page/AdminTemplate")),
    //     nested: [
    //         { path: "dashboard", element: lazy(() => import("../page/AdminTemplate/DashBoard")) },
    //     ],
    // },
    { path: "login", element: lazy(() => import("../Page/Auth/LoginPage")) },
    { path: "register", element: lazy(() => import("../Page/Auth/Register")) },
    { path: "forget-password", element: lazy(() => import("../Page/Auth/ForgetPassword")) },
    { path: "check-mail", element: lazy(() => import("../Page/Auth/CheckMail")) },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                >
                    {route.nested.map((item) => {
                        return (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.element />}
                            />
                        )
                    })}
                </Route>
            )
        } else {
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )
        }
    })
};



export default renderRoutes;