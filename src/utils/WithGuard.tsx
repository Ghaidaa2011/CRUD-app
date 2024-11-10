import { JSX } from "react/jsx-runtime";
import { useAppSelector } from "../app/hooks";
import { Navigate } from "react-router-dom";

const WithGuard = (Component: () => JSX.Element) => {
  const Wrapper = () => {
    const { accessToken } = useAppSelector((state) => state.auth);
    return accessToken ? (
      <Component />
    ) : (
      <Navigate to="/login?message=login_required" replace />
    );
  };
  return Wrapper;
};
export default WithGuard;
