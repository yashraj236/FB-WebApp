import React from "react";
import { setUser } from "./actions/userAction";
import "./Login.css";
import FacebookLogin from "react-facebook-login";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const signInFacebook = (res) => {
    dispatch(setUser({uid: "0000"}));
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h1>Welcome, Please Login to Continue</h1>
        </div>

        {/* <div className="login__withGoogle" onClick={signInFacebook}>
          <span>Sign in with Facebook</span>
        </div> */}
        <FacebookLogin
          appId="926882134844431"
          autoLoad={true}
          fields="name,email,picture"
          //   onClick={componentClicked}
          callback={signInFacebook}
        />
        {/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div> */}
      </div>
    </div>
  );
}

export default Login;
