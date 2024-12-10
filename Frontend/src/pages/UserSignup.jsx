import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base mb-2 font-medium">What's your name?</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee] rounded px-4 py2 border w-1/2 text-base placeholder:text-sm"
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                className="bg-[#eeeeee] rounded px-4 py2 border w-1/2 text-base placeholder:text-sm"
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <h3 className="text-base mb-2 font-medium">What's your email?</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py2 border w-full text-lg placeholder:text-sm"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h3 className="text-base mb-2 font-medium">Enter Password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py2 border w-full text-lg placeholder:text-sm"
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py2 w-full text-lg placeholder:text-base">
              Signup
            </button>
            <p className="text-center ">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 ">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Link
            to="/captain-signup"
            className="bg-[#10b444] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py2 w-full text-lg placeholder:text-base"
          >
            Signup as Captain
          </Link>
          <p className="text-[#808080] text-[8px] leading-tight">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Uber and its affiliates to email
            provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
