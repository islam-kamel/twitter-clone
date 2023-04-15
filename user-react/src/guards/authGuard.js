import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthState} from "../store/features/auth/authentication";

function authGuard(Component) {

  const Wrapper = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const loginState = useSelector(state => state.currentUser.isLogin)

    useEffect(() => {
      if (!loginState) {
        dispatch(fetchAuthState())
          .unwrap()
          .catch(_ => navigate("/explore"));
      }
    }, [dispatch, loginState, navigate])

    return loginState && <Component {...props} />;
  }

  return Wrapper;
}

export default authGuard;
