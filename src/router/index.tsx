import React, { Children, lazy } from "react";
import LayoutView from "@/layout";
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Config = lazy(() => import("@/pages/Config"));

import { Navigate } from "react-router-dom";

const withLoadingComponent = (component: JSX.element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{component}</React.Suspense>
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/",
    element: <LayoutView />,
    children: [
      {
        path: "/dashboard",
        element: withLoadingComponent(<Dashboard />),
      },
      {
        path: "/config",
        element: withLoadingComponent(<Config />),
      },
    ],
  },
];

export default routes;
