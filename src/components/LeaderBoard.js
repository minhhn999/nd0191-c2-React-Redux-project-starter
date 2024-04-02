import React from "react";
import { connect } from "react-redux";
import "./LeaderBoard.css";

const LeaderBoard = (props) => {
  const { users } = props;
  const userList = Object.entries(users).map(([key, value]) => {
    return {
      user: key,
      answered: Object.keys(value.answers).length,
      created: value.questions.length,
      avatarURL: value.avatarURL,
      name: value.name,
    };
  });
  const sortedUserList = userList.sort((a, b) => {
    const sumA = a.answered + a.created;
    const sumB = b.answered + b.created;
    return sumB - sumA; // descending order
  });

  return (
    <div className="leader-board-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortedUserList.map((user) => (
            <tr key={user.user}>
              <td>
                <div className="user-avatar-container">
                  <img src={user.avatarURL} alt="Avatar" />
                  <div className="user-info">
                    <span>{user.name}</span>
                    <span>{user.user}</span>
                  </div>
                </div>
              </td>
              <td data-testid={`${user.name} answered`}>{user.answered}</td>
              <td data-testid={`${user.name} created`}>{user.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(LeaderBoard);
