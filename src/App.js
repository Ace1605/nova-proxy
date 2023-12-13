import { ToastContainer } from "react-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import CourseSelect from "./components/pages/CourseSelect";
import LessonTopics from "./components/pages/LessonTopics";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/courses" element={<CourseSelect />} />
          <Route path="/courses/:name" element={<LessonTopics />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer delay={3000} position="top-right" />
    </div>
  );
}

export default App;
