import {useDispatch} from "react-redux";
import {logout} from "../store/features/auth/authentication";

function useLogout() {
  const dispatch = useDispatch();
  return () => dispatch(logout());
}

export default useLogout;
