import {useSelector} from "react-redux";

function noneLoginRequire(Component) {

  const Wrapper = (props) => {
    const loginState = useSelector(state => state.currentUser.isLogin);
    return !loginState && <Component {...props}/>
  }

  return Wrapper;
}

export default noneLoginRequire;
