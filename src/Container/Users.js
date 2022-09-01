import React from "react";
import { useGetUsersQuery, useAddUserMutation } from "../Api/usersApi";
import { Table } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Single",
    dataIndex: "single",
    key: "single",
    render: (row) => {
      console.log(row);
      return <>{row ? "Yes" : "No"}</>;
    },
  },
];

let initialUser = {
  name: "",
  age: "",
  single: "",
};

function RTKUsers() {
  const { data = [], isLoading } = useGetUsersQuery();
  const [addUser, { isError }] = useAddUserMutation();
  const [newUser, setNewUser] = useState(initialUser);

  const handleAddUser = async () => {
    await addUser(newUser);

    setNewUser(initialUser);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };
  if (isLoading) return <h1>Loading ...</h1>;
  return (
    <>
      <div className="px-12 pt-6">
        {/* <div className="mx-8 my-8 flex flex-row justify-between">
          <label for="name">
            Name
            <input
              id="name"
              name="name"
              className="border"
              type="text"
              value={newUser.name}
              onChange={onChange}
            />
          </label>

          <label for="age">
            Age
            <input
              id="age"
              name="age"
              className="border"
              type="text"
              value={newUser.age}
              onChange={onChange}
            />
          </label>

          <label for="single">
            Single
            <input
              id="single"
              name="single"
              className="border"
              type="text"
              value={newUser.single}
              onChange={onChange}
            />
          </label>

          <button className="border" onClick={handleAddUser}>
            Add
          </button>
        </div> */}
        {data.length > 0 && <Table columns={columns} dataSource={data} />}
      </div>{" "}
    </>
  );
}

export default RTKUsers;
