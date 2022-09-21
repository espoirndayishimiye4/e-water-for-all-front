import React from "react";
import "./Request.css";
import Twiter from "../Images/twiter.png";
import Whatsapp from "../Images/whatsapp.png";
import Instagram from "../Images/instagram.png";
import Linkedin from "../Images/linkedin.png";
import HeaderNavbar from "../Top-Nav-Bar/Top-Nav-bar";
import axios from 'axios';

function Request() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");
  const RequestFunction = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `https://e-water-for-all.herokuapp.com/message`,
      {
        name,
        phone,
        address,
        message
      })
      console.log(res);
  };
  return (
    <div>
      <HeaderNavbar />
      <div className="request-form">
        <h1 id="information">Client Information</h1>
        <form onSubmit={RequestFunction}>
          <div className="form-control">
            <label id="label">Full Names</label>
            <input
              type="text"
              name="names"
              id="namee"
              placeholder="Full Names"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-control">
            <label id="label">Phone Number</label>
            <input
              type="phone"
              name="phone"
              id="namee"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="form-control">
            <label id="label">Adress</label>
            <input
              type="text"
              name="address"
              id="namee"
              placeholder="Adress"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div className="form-control">
            <label id="label">Message</label>
            <input
              type="message"
              name="massage"
              id="messages"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="button">
            <button id="button12" >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="footer1">
        <div className="footer-text1">
          <h1 id="header-footer">E_Water For All</h1>
          <p id="water">
            Pharetra, pharetra in massa
            <br /> nisl mi neque, aliquam, nam.
            <br /> Luctus urna.
          </p>
        </div>
        <div className="footer-text1">
          <h1 id="header-footer">Use Links</h1>
          <p id="link">Home</p>
          <p id="link">About Us</p>
          <p id="link">Contact Us</p>
        </div>
        <div className="footer-text1">
          <h1 id="header-footer">Social Media</h1>
          <div className="platforms">
            <img src={Twiter} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
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

export default Request;
