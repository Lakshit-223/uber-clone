import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const CaptainSignup = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    
    if(response.status===201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://play-lh.googleusercontent.com/u4PW84G_8dSNVtBadRA3JsmBRxFjO6UNeHtdOnV1k6bFXl8qmbeXIXE2Je8on-D6Vg=w240-h480-rw"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base mb-2 font-medium w-full">
              What's our captain's name?
            </h3>
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
            <h3 className="text-base mb-2 font-medium">Email</h3>
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
            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                type="number"
                placeholder="Vehicle Capacity"
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
              <select
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs placeholder:text-base"
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py2 w-full text-lg placeholder:text-base">
              Create Captain Account
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

export default CaptainSignup;
