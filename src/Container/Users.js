import React, { useEffect, useState } from "react";
import { axiosRequest } from "../utils/axiosRequest";
import Table from "react-bootstrap/Table";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axiosRequest("users?page=1");
      setUsers(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Createdat</th>
            <th>Name</th>
            <th>Email</th>
            <th>location</th>
            <th>ProfilePicture</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.createdat.slice(0, 10)}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>
                    <img
                      src={user.profilepicture}
                      alt={user.profilepicture}
                      height="100"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
