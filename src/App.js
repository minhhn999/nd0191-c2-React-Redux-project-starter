// import LoadingBar from "react-redux-loading-bar";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import AnswerQuestion from "./components/AnswerQuestion";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import Header from "./components/Header";

function App(props) {
  console.log(props);
  return (
    <>
      <LoadingBar />
      {!props.loggedInUser ? (
        <Login />
      ) : (
        <div className="container px-4 m-auto">
          <Header />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route
              path="/questions/:question_id"
              element={<AnswerQuestion />}
            />
            <Route path="/add" element={<NewQuestion />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
          </Routes>
        </div>
      )}

      {/* 
      <div className="container px-4 m-auto">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/questions/:question_id" element={<AnswerQuestion />} />
          <Route path="/add" element={<NewQuestion />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </div> */}
    </>
  );
}
const mapStateToProps = ({ authedUser }) => ({
  loggedInUser: authedUser,
});
export default connect(mapStateToProps)(App);
