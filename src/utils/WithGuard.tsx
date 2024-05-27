import { JSX } from "react/jsx-runtime";
import { useAppSelector } from "../app/hooks";

const WithGuard = (Component: () => JSX.Element) => {
  const Wrapper = () => {
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    return isLoggedIn ? <Component /> : <div>Please log in first!</div>;
  };
  return Wrapper;
};
export default WithGuard;
