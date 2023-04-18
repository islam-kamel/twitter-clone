import {useDispatch} from "react-redux";
import {logout} from "../store/features/user/user";

function useLogout() {
  const dispatch = useDispatch();
  return () => dispatch(logout());
}

export default useLogout;
