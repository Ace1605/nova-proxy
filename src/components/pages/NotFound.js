import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container grid place-items-center pt-[8%] pb-12">
        <h2 className="text-3xl text-center font-medium my-8">404 error!</h2>
        <h4 className="text-center">We Are Sorry. Page Not Found</h4>
        <p className="text-center my-8">
          Unfortunately the page you were looking for could not be found. It may
          be temporarily unavailable, moved or no longer exist.
        </p>
        <span
          onClick={() => {
            navigate("/courses");
          }}
          className="cursor-pointer text-center"
        >
          Explore other pages
        </span>
      </div>
    </>
  );
}

export default NotFound;
