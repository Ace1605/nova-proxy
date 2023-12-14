import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Avatar1 } from "../svg/Avatar";

const spanStyle = {
  color: "#000000",
  padding: "1rem",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  background: "#fff",
  borderRadius: "1rem",
};

let lectureSlides = [
  {
    question: "Which of the following is the correct plural of LUGGAGE",
    options: ["Luggages", "Luggage", "Baggages", "None of the above"],
    choice: "",
  },
  {
    question: "What is the correct plural of LUGGAGE",
    options: ["Luggages", "agae", "Baggages", "None of the above"],
    choice: "",
  },
  {
    question: "Which of these is correct plural of LUGGAGE",
    options: ["Luggages", "Lugge", "Baggages", "None of the above"],
    choice: "",
  },
  {
    question: "Which of the following is the correct plural of LUGGAGE",
    options: ["Luggages", "Lugge", "Baggages", "None of the above"],
    choice: "",
  },
  {
    question: "Which of the following is the correct plural of LUGGAGE",
    options: ["Luggages", "Luggage", "Baggages", "None of the above"],
    choice: "",
  },
];

function QuizHub() {
  const slideRef = useRef();
  const location = useLocation();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const back = () => {
    if (slideRef.current) {
      slideRef.current.goBack();
      setCount((prevCurrent) =>
        prevCurrent > 0 ? prevCurrent - 1 : prevCurrent
      );
      setSelected("");
    }
  };

  const next = () => {
    if (slideRef.current && count < lectureSlides.length) {
      slideRef.current.goNext();
      setCount((prevCurrent) =>
        prevCurrent < lectureSlides.length - 1 ? prevCurrent + 1 : prevCurrent
      );
      setSelected("");
    }
  };

  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: false,
    easing: "ease",
  };

  return (
    <>
      {submitted ? (
        <div className="slide-container w-[20rem] 880:w-[30rem]">
          <div className="mt-[7rem] p-8 bg-white w-full rounded-xl">
            <div className="flex gap-2">
              <Avatar1 className="h-[3rem] w-[3rem]" />
              <div>
                <p className="text-red-700 font-medium">Linda Knor</p>
                <p className="text-neutral-700 font-medium">
                  3/{lectureSlides.length} points
                </p>
              </div>
            </div>
            <p className="text-neutral-700 my-3 font-normal">
              Ranked 22 nationwide
            </p>
            <p className="text-neutral-700 my-3 font-normal">
              2 courses completed
            </p>
            <p className="text-neutral-700 my-3 font-normal">Level 1</p>
            <button
              className="bg-gradient-to-r from-primary-400 to-primary-200 text-white py-2 px-4 w-full rounded-xl"
              type="button"
              style={{ marginRight: "20px" }}
              onClick={back}
            >
              View Leaderboard
            </button>
          </div>
        </div>
      ) : (
        <div className="slide-container w-[20rem] 880:w-[30rem]">
          <div
            className="mt-8 mb-2 880:my-12 relative h-[12rem] rounded-t-3xl"
            style={{
              backgroundImage: `url("/images/bts.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-center justify-center bg-white h-[5rem] w-full bottom-0 absolute rounded-t-3xl">
              <p className="text-center font-medium">
                {lectureSlides[count].question}
              </p>
            </div>
          </div>
          <Slide ref={slideRef} {...properties}>
            {lectureSlides.map((slide, index) => (
              <div key={index}>
                {slide.options.map((x, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelected(x);
                      slide.choice = x;
                    }}
                    className={
                      slide.choice === x || selected === x
                        ? "bg-primary-400 text-white font-medium py-3 px-4 mx-auto 880:px-8 w-[18rem] my-3 880:w-[30rem] text-center shadow rounded-3xl border border-primary-400 border-primary-400"
                        : "cursor-pointer bg-white font-medium py-3 px-4 mx-auto 880:px-8 w-[18rem] my-3 880:w-[30rem] text-center shadow rounded-3xl border border-primary-400 border-primary-400"
                    }
                  >
                    {x}
                  </p>
                ))}
              </div>
            ))}
          </Slide>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              margin: "50px 0",
            }}
          >
            {count > 0 ? (
              <button
                className="bg-primary-1000 text-white py-2 px-4 rounded-xl"
                type="button"
                style={{ marginRight: "20px" }}
                onClick={back}
              >
                Back
              </button>
            ) : (
              <button
                className="bg-primary-1000 text-white py-2 px-4 rounded-xl"
                type="button"
                style={{ marginRight: "20px" }}
                onClick={() => navigate(-1)}
              >
                Back to lectures
              </button>
            )}
            {count < lectureSlides.length - 1 ? (
              <button
                className="bg-primary-1000 text-white py-2 px-4 rounded-xl"
                type="button"
                style={{ marginRight: "20px" }}
                onClick={next}
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="bg-primary-1000 text-white py-2 px-4 rounded-xl"
                type="button"
                style={{ marginRight: "20px" }}
              >
                Submit answers
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default QuizHub;
