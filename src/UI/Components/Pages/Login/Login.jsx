import React from "react";

import "./Login.css";
import icon from "../../Images/Vector.png";
import log from "../../Images/Login-Tap.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const RequestFunction = async (e) => {
    e.preventDefault();

    const res = await axios.post(`https://e-water-for-all.herokuapp.com/user/login`, {
      email,
      password,
    });
    if(res.data.success === true){
      navigate('/dashboard')
    }
    else{
      alert("incorrect email or password");
    }
  };
  return (
    <div>
      <div className="main">
        <img id="image" src={log} alt="" />
        <div className="left-side">
          <p id="title">Login</p>
          <form className="form" onSubmit={RequestFunction}>
            <input
              type="username"
              id="text"
              placeholder="Username"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              id="text"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          
          <div className="password-rest">
            <div className="icon">
              <img id="icon" src={icon} alt="" />
              <p>rember me?</p>
            </div>
            <p>forget password?</p>
          </div>
          <div className="button">
            <Link to="/register" id="buton">
              Register
            </Link>
            
              <button id="button11">
              Login
              </button>
            
          </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p id="foot">Copyright @ E_water For All </p>
        <p id="foot">
          Developer : <span>BE ltd</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
