import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

let lectureSlides = [
  {
    question: `In the sentence "She speaks softly," what type of adverb is "softly"?`,
    options: [
      "Adverb of Time",
      "Adverb of Manner",
      "Adverb of Place",
      "Adverb of Degree",
    ],
    choice: "",
  },
  {
    question: `Where should the adverb "quickly" be placed in the sentence "The athlete finished the race"?`,
    options: [
      "Before the main verb",
      "After the auxiliary verb",
      "At the beginning of the sentence",
      "All of the above",
    ],
    choice: "",
  },
  {
    question: `Choose the correct adverb to complete the sentence: "He completed the assignment ________ to earn a high grade."`,
    options: ["Carefully", "Yesterday", "Quite", "Nearby"],
    choice: "",
  },
  {
    question: `In the sentence "After the rain stopped, they went outside to play," what is the adverbial phrase?`,
    options: [
      "After the rain stopped",
      "They went outside",
      "To play",
      "Outside to play",
    ],
    choice: "",
  },
  {
    question: `Find the error in the sentence "She sings good," and provide the correct form using an adverb.`,
    options: [
      "She sings well",
      "She sings goodly.",
      "She sings good.",
      "She sings goodness.",
    ],
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
      {" "}
      {submitted ? (
        <div className="slide-container w-[20rem] 880:w-[30rem]">
          <div className="mt-[7rem] p-8 bg-white w-full rounded-xl">
            <div className="flex gap-2">
              <div>
                <p className="text-primary-400 font-medium text-xl w-8/12 mb-4">
                  Congratulations on completing this course!!
                </p>
                <p className="text-neutral-700 my-2 font-medium">
                  4/{lectureSlides.length} questions correctly
                </p>
                <p className="text-neutral-700 my-2 font-medium">
                  You have earned 10 points
                </p>
                <p className="text-neutral-700 gap-[0.1rem] my-1 font-medium">
                  Earn 1000 points to get a pack of coke from{" "}
                  <img
                    className="w-[2.7rem] h-[2.2rem] -ml-1 inline"
                    src="/logo/coca-cola-logo.svg"
                    alt="logo"
                  />
                </p>
              </div>
            </div>
            <p className="text-neutral-700 my-3 font-normal">Level 1</p>
            <p className="text-neutral-700 my-3 font-normal">
              Do you want to learn more?
            </p>

            <button
              className="bg-primary-h700 text-white py-2 px-4 w-full rounded-xl"
              type="button"
              style={{ marginRight: "20px" }}
              onClick={() => navigate("/courses")}
            >
              Courses
            </button>
          </div>
        </div>
      ) : (
        <div className="slide-container w-[20rem] 880:w-[30rem]">
          <div
            className="mt-8 mb-2 880:my-12 relative h-[14rem] rounded-t-3xl"
            style={{
              backgroundImage: `url("/images/bts.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-center justify-center bg-white h-[7rem] w-full bottom-0 absolute rounded-t-3xl">
              <p className="text-center font-medium px-2">
                {lectureSlides[count].question}
              </p>
            </div>
          </div>
          <Slide ref={slideRef} {...properties} canSwipe={false}>
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
                        ? "bg-primary-h700 text-white font-medium py-3 px-4 mx-auto 880:px-8 w-[18rem] my-3 880:w-[30rem] text-center shadow rounded-3xl border border-primary-h700 border-primary-400"
                        : "cursor-pointer bg-white font-medium py-3 px-4 mx-auto 880:px-8 w-[18rem] my-3 880:w-[30rem] text-center shadow rounded-3xl border border-primary-h700 border-primary-400"
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
