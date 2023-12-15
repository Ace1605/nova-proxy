import { ToastContainer } from "react-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import CourseSelect from "./components/pages/CourseSelect";
import LessonTopics from "./components/pages/LessonTopics";
import Lessons from "./components/pages/Lessons";
import Quizes from "./components/pages/Quizes";
import LeaderBoard from "./components/pages/LeaderBoard";
import Performance from "./components/pages/Performance";
import MockExam from "./components/pages/MockExam";
import ExamSubjectSelect from "./components/pages/ExamSubjectSelect";
import ExamQuiz from "./components/pages/ExamQuiz";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/courses" element={<CourseSelect />} />
          <Route path="/courses/:name" element={<LessonTopics />} />
          <Route path="/courses/:name/:lesson" element={<Lessons />} />
          <Route path="/courses/:name/:lesson/quiz" element={<Quizes />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/mock-exam/:name" element={<ExamSubjectSelect />} />
          <Route path="/exam-quiz" element={<ExamQuiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer delay={3000} position="top-right" />
    </div>
  );
}

export default App;
