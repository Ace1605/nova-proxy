import React from "react";
import CustomInput from "../input/CustomInput";
import Button from "../button/Button";
import { FaFireFlameCurved } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center pt-[20%] pb-12">
      <FaFireFlameCurved className="text-primary-1000 text-8xl 880:text-9xl" />
      <h3 className="text-2xl tracking-tighter 880:text-3xl font-semibold text-center text-primary-900 my-6 880:my-8 mx-0">
        Test Your Knowledge
      </h3>
      <p className="text-neutral-700 my-1 880:my-2 font-medium">
        Do you have what it takes to be a top scholar?
      </p>
      <p className="text-neutral-700 my-1 880:my-2 font-medium">
        Win some awesome prizes.
      </p>
      <div className="mt-16 mb-4">
        <CustomInput placeholder="FirstName" type="text" />
        <CustomInput placeholder="LastName" type="text" />
        <CustomInput placeholder="+234" type="tel" />
        <CustomInput placeholder="Email" type="text" />
        <CustomInput placeholder="Password" type="password" />
      </div>
      <Button text="Sign Up" onClick={() => navigate("/login")} />
    </div>
  );
}

export default SignUp;
