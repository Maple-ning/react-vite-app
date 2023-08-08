import { useRoutes, useLocation, useNavigate, Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";

import Layout from "@/layout";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Config from "@/pages/Config";
import Error404 from "@/pages/Error404";

const myRouter = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"home",
        index: true,
        element: <Home />
      },
      {
        path: "board",
        element: <Config />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <Error404 />
  }
]


const Router = () => (
  <Suspense fallback={<div>loading</div>}>{useRoutes(myRouter)}</Suspense>
);

const RouterBeforeEach = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const isAuth = localStorage.getItem("react-token");
  useEffect(() => {
    if (!isAuth&&location.pathname !== '/login') {
      navigator('/login')
    }
  });
  return <Outlet />
};
export { Router, RouterBeforeEach };