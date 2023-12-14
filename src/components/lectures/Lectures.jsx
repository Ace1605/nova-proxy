import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  color: "#000000",
  padding: "0.1rem",
};

const divStyle = {
  display: "grid",
  backgroundSize: "cover",
  background: "#fff",
  borderRadius: "1rem",
  padding: "1rem",
};

const lectureSlides = [
  {
    lecture:
      "Introduction: \n Adverbs are an essential part of speech that add depth and detail to our language. They modify verbs, adjectives, and other adverbs, providing information about how, when, where, or to what degree an action or adjective occurs. In this lesson, we'll explore the different types of adverbs and how to use them effectively in sentences.",
    caption: "Slide 1",
  },
  {
    lecture: `Adverbs of Manner: \n Answer the question: "How" ? \n Examples: quickly, beautifully, carefully \n Example sentence: She sings beautifully.`,
    caption: "Slide 2",
  },
  {
    lecture: `Adverbs of Time: \n Answer the question: "When?" \n Examples: now, later, yesterday \n Example sentence: We will go to the park later.`,
    caption: "Slide 3",
  },
  {
    lecture: `Adverbs of Place: \n Answer the question: "Where?" \n Examples: here, there, everywhere \n Example sentence: The cat is hiding under the table.`,
    caption: "Slide 2",
  },
  {
    lecture: `Adverbs of Degree: \n
Answer the question: "To what extent?" \n
Examples: very, too, quite \n
Example sentence: It is too hot outside
`,
    caption: "Slide 3",
  },
  {
    lecture: `Adverbs of Frequency: \n
Answer the question: "How often?" \n
Examples: always, often, rarely \n
Example sentence: She always arrives early.
`,
    caption: "Slide 2",
  },
  {
    lecture: `Placement of Adverbs:\n
Adverbs can appear in various positions within a sentence, depending on the emphasis you want to give. Common placements include: \n

Before the main verb e.g She quickly ran to catch the bus.\n
After the auxiliary verb e,g He is often late to meetings.\n
At the beginning or end of a sentence e.g Unfortunately, the concert was canceled. The car stopped suddenly.
`,
    caption: "Slide 3",
  },
  {
    lecture: `Double Negatives:\n
Incorrect: He didn't hardly study.\n
Correct: He hardly studied.\n
Incorrect: She almost drove her kids to school every day.\n
Correct: She drove her kids to school almost every day.\n
Incorrect: The movie was extremely, incredibly, and unbelievably good.\n
Correct: The movie was incredibly good.\n

`,
    caption: "Slide 3",
    reference: "Avoiding Common Adverb Mistakes:",
  },
  {
    lecture: `Practice:\n
Construct sentences using different types of adverbs to demonstrate understanding. \n Consider varying the placement of adverbs within the sentences for practice.

`,
    caption: "Slide 3",
  },
  {
    lecture: `Conclusion:\n
Adverbs play a crucial role in enhancing the richness of our language by providing additional information about actions, adjectives, and other adverbs. By mastering the use of adverbs, you can make your writing more precise, descriptive, and engaging.


`,
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
              {slide.reference && (
                <p className="font-semibold pl-[0.1rem] text-black">
                  {slide.reference}
                </p>
              )}
              {slide.lecture.split("\n").map((paragraph, i) => (
                <p
                  key={i}
                  style={spanStyle}
                  className={i === 0 ? "font-semibold" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Slide>
      <div
        style={{ display: "flex", justifyContent: "left", margin: "15px 0" }}
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
