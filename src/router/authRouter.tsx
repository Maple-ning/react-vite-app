import { useLocation, Navigate } from "react-router-dom";
import { getKeyName, getLocalStorage } from "@/utils/publicFn";

const AuthRouter = (props) => {
  const { pathname } = useLocation();
  const route = getKeyName(pathname);
  // 1.看路径对应的组件是否需要权限，如果不需要权限直接渲染
  if (!route?.auth) {
    return props.children;
  }
  // 2.如果对应组件需要权限，则判断当前是否有权限标识，没有则重定向到登录页面
  const { token } = getLocalStorage("learn-token") || { token: null };
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const routerList = ["/", "/home"];
  if (routerList.indexOf(pathname) === -1) {
    return <Navigate to="/403" replace />;
  }
  return props.children;
}

export default AuthRouter