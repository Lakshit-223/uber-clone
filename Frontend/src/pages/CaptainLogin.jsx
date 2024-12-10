import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    // console.log(captainData);
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-2"
            src="https://play-lh.googleusercontent.com/u4PW84G_8dSNVtBadRA3JsmBRxFjO6UNeHtdOnV1k6bFXl8qmbeXIXE2Je8on-D6Vg=w240-h480-rw"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-7 rounded px-4 py2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] mb-3 rounded px-4 py2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="*********"
            />
            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py2 w-full text-lg placeholder:text-base">
              Login
            </button>
            <p className="text-center ">
              Want to be our Captain?{" "}
              <Link to="/captain-signup" className="text-blue-600 ">
                Register as Captain
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py2 w-full text-lg placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
