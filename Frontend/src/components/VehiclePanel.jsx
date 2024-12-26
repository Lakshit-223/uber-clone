import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0  bg-red-400"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex p-3 items-center justify-between border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full"
      >
        <img
          className="h-12 mix-blend-multiply"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            Uber Go{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm ">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$193.20</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex p-3 items-center justify-between border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full"
      >
        <img
          className="h-12 mix-blend-multiply"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1649231046/assets/84/ad96b0-f8d6-41a7-babf-816237fe530d/original/Uber_Moto_Orange_696x464_pixels_Tablet.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm ">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$193.20</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex p-3 items-center justify-between border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full"
      >
        <img
          className="h-12 mix-blend-multiply"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm ">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$118.21</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
