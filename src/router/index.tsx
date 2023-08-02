import React,{ Children, lazy } from "react";
const Home = lazy(()=>import("@/pages/Home"))
const About = lazy(()=>import("@/pages/About"))
const Page1 = lazy(()=>import("@/pages/page1"))
const Page2 = lazy(()=>import("@/pages/page2"))

import { Navigate } from "react-router-dom";

const withLoadingComponent = (component:JSX.element) => (
   <React.Suspense fallback={<div>Loading...</div>}>
      {component}
   </React.Suspense>
)

const routes = [
   {
    path:"/",
    element:<Navigate to="/page1"/>
   },
   {
    path:"/",
    element:<Home/>,
    children:[
      {
         path:"/page1",
         element:withLoadingComponent(<Page1/>),
      },
      {
         path:"/page2",
         element:withLoadingComponent(<Page2/>),
      }
    ]
   },
   {
    path:"/about",
    element:withLoadingComponent(<About/>)
   }
]

export default routes;