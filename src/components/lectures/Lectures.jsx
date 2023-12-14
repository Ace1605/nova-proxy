import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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

const lectureSlides = [
  {
    lecture:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum necessitatibus voluptate officiis modi, dolor saepe iure atque nesciunt cupiditate fugit alias enim consectetur nemo in, ratione debitis ullam nisi!Illo laborum suscipit necessitatibus nihil quis? Cupiditate quod unde odit. Placeat voluptatem expedita debitis dignissimos quas, possimus libero est voluptatum, commodi quis sint labore aut dolore facilis laborum veritatis deleniti.",
    caption: "Slide 1",
  },
  {
    lecture:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum necessitatibus voluptate officiis modi, dolor saepe iure atque nesciunt cupiditate fugit alias enim consectetur nemo in, ratione debitis ullam nisi!Illo laborum suscipit necessitatibus nihil quis? Cupiditate quod unde odit. Placeat voluptatem expedita debitis dignissimos quas, possimus libero est voluptatum, commodi quis sint labore aut dolore facilis laborum veritatis deleniti.",
    caption: "Slide 2",
  },
  {
    lecture:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum necessitatibus voluptate officiis modi, dolor saepe iure atque nesciunt cupiditate fugit alias enim consectetur nemo in, ratione debitis ullam nisi!Illo laborum suscipit necessitatibus nihil quis? Cupiditate quod unde odit. Placeat voluptatem expedita debitis dignissimos quas, possimus libero est voluptatum, commodi quis sint labore aut dolore facilis laborum veritatis deleniti.",
    caption: "Slide 3",
  },
];

function Lectures() {
  const slideRef = useRef();
  const location = useLocation();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  let current = 1;

  const back = () => {
    if (slideRef.current) {
      slideRef.current.goBack();
      setCount((prevCurrent) =>
        prevCurrent > 0 ? prevCurrent - 1 : prevCurrent
      );
    }
  };

  const next = () => {
    if (slideRef.current && count < lectureSlides.length) {
      slideRef.current.goNext();
      setCount((prevCurrent) =>
        prevCurrent < lectureSlides.length - 1 ? prevCurrent + 1 : prevCurrent
      );
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

  console.log(location.pathname);

  return (
    <div className="slide-container w-[20rem] 880:w-[30rem]">
      <div
        className="my-8 880:my-12 relative h-[14rem] rounded-t-3xl"
        style={{
          backgroundImage: `url("/images/bts.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center bg-white h-[5rem] w-full bottom-0 absolute rounded-t-3xl">
          <p className="text-center font-medium">
            {location.search.slice(1).replace(/%20/g, " ")}
          </p>
        </div>
      </div>
      <Slide ref={slideRef} {...properties}>
        {lectureSlides.map((slide, index) => (
          <div key={index}>
            <div style={divStyle}>
              <span style={spanStyle}>{slide.lecture}</span>
            </div>
          </div>
        ))}
      </Slide>
      <div
        style={{ display: "flex", justifyContent: "left", margin: "50px 0" }}
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
            Back to topics
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
            className="bg-primary-1000 text-white py-2 px-4 rounded-xl"
            type="button"
            style={{ marginRight: "20px" }}
            onClick={() => {
              navigate(`${location.pathname}/quiz`);
            }}
          >
            Test your might🔥
          </button>
        )}
      </div>
    </div>
  );
}

export default Lectures;
