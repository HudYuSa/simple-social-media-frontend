import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../slices/user/userSlice";

const RequireAuth = () => {
  const user = useSelector(selectUser);
  const location = useLocation();
  console.log(user.logged);

  return user.logged ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
