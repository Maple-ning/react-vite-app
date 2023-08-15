import { Suspense, lazy } from 'react'
import Loading from '@/components/Loading'

// 懒加载组件
const lazyLoad = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

// 路由组件引入
const Layout = lazy(() => import('@/layout'));
const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));
const Error404 = lazy(() => import('@/pages/Error404'));


const rootRouter = [
  {
    path: '/',
    name: '首页',
    key: '/',
    auth: true,
    element: lazyLoad(Layout),
    children: [
      {
        index: true,
        name: '首页',
        key: '/',
        auth: true,
        element: lazyLoad(Home),
      },
    ],
  },
  {
    index: false,
    path: 'login',
    name: '登录',
    key: '/login',
    auth: false,
    element: lazyLoad(Login),
  },
  // {
  //   index: false,
  //   path: 'dashboard/*',
  //   name: 'Dashboard',
  //   key: '/dashboard',
  //   auth: true,
  //   element: lazyLoad(Home),
  // },
  {
    index: false,
    path: '/403',
    name: '403',
    key: '/403',
    auth: false,
    element: <Home/>,
  },
  {
    path: '*',
    name: 'No Match',
    key: '*',
    element: lazyLoad(Error404),
  },
]

export default rootRouter