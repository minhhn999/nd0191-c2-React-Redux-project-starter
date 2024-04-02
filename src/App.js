// import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import AnswerQuestion from "./components/AnswerQuestion";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import { Fragment } from "react";

function App(props) {
  console.log(props);
  return (
    <Fragment>
      <LoadingBar />
      {props.loading === true ? (
        <Login />
      ) : (
        <div className="container px-4 m-auto">
          <Header />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route
              exact
              path="/questions/:question_id"
              element={<AnswerQuestion />}
            />
            <Route exact path="/add" element={<NewQuestion />} />
            <Route exact path="/leaderboard" element={<LeaderBoard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      )}
    </Fragment>
  );
}
const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});
export default connect(mapStateToProps)(App);
