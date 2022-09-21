import React from "react";
import "./Registration.css";
import picture from "../Images/Login-Tap.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const navigate = useNavigate()
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const RequestFunction = async (e) => {
    e.preventDefault();

    const res = await axios.post(`http://localhost:3500/user`, {
      name,
      address,
      email,
      password,
    });
    if(res.data.success === true){
      navigate('/login')
    };
  };
  return (
    <div>
      <div className="main">
        <div className="left-side">
          <img id="tap" src={picture} alt="" />
        </div>
        <div className="right-side">
          <h1 id="header">Registration</h1>
          <form className="registration-form" onSubmit={RequestFunction}>
            <div className="filled-form">
              <label id="label">Full Names</label>
              <input
                type="text"
                className="Name"
                placeholder="Full Names"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="filled-form">
              <label id="label">Adress</label>
              <input
                type="text"
                className="Name"
                placeholder="Adress"
                required
                onChange={(e) => setAddress(e.target.value)}
              value={address}
              />
            </div>

            <div className="filled-form">
              <label id="label">Email</label>
              <input
                type="email"
                className="Name"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
            </div>

            <div className="filled-form">
              <label id="label">Password</label>
              <input
                type="password"
                className="Name"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
            </div>
            <div className="button-register-login">
              <button id="buttons1"> Login</button>
              <Link to="/login" id="buttons">
                Register
              </Link>
            </div>
          </form>

          <div className="warm-up">
            <p>
              Already Have An Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p id="foot">copyright @ E_water for all </p>
        <p id="foot">
          developer : <span>BE ltd</span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
