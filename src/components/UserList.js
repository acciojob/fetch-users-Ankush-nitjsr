import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="focusArea">
      <div className="headerLine">
        <h3>Blue Whales</h3>
        <button onClick={getUsers} className="btn">
          Get User List
        </button>
      </div>
      <div className="tableContent">
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Avatar</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0
              ? users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <img src={user.avatar} alt="user's image" />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        {users.length == 0 && (
          <p style={{ alignSelf: "center" }}>No data found to display.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
