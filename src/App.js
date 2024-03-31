// import LoadingBar from "react-redux-loading-bar";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import AnswerQuestion from "./components/AnswerQuestion";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      {/* <LoadingBar /> */}
      <div className="container px-4 m-auto">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/questions/:question_id" element={<AnswerQuestion />} />
          <Route path="/add" element={<NewQuestion />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
