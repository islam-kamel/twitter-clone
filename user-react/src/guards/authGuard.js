import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthState} from "../store/features/user/user";
import LoadingSpinner from "../components/Loading/loading-spinner";
import {throttle} from "../utility/utils";


function authGuard(Component) {

  return (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.currentUser.isLogin);
    const [loading, setLoading] = useState(true);

    const getState = useCallback(async () => {
      try {
        await dispatch(fetchAuthState()).unwrap()
        setLoading(false)
      } catch (_) {
        navigate("/explore")
      }
    }, [dispatch, navigate])

    useEffect(() => {
      throttle(getState, 50)()
    }, [getState])

    return (
      loading
        ? <div
          className={"d-flex align-items-center justify-content-center"}
          style={{height: "100vh"}}
        >
          <LoadingSpinner/>
        </div>
        : loginState && <Component {...props} />
    );
  };
}

export default authGuard;
