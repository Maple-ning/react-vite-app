import { useLocation, Navigate } from "react-router-dom";
import { getKeyName, getLocalStorage } from "@/utils/publicFn";

const whiteList = ["/login"];

const AuthRouter = (props) => {
  const { pathname } = useLocation();
  const token = getLocalStorage("learn-token") || { token: null };
  if(pathname === '/'){
    return <Navigate to="/home" replace />;
  }
  if(token){
    return props.children;
  }else{
    if(whiteList.indexOf(pathname) !== -1){
      return props.children;
    }
    return <Navigate to="/login" replace />;
  }
}

export default AuthRouter