import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import UsersTable from "./components/UsersTable";
import Posts from "./components/Posts";
import { UserType } from "./helpers/types";

function App() {
  const [user, setUser] = useState<UserType>({ id: 0, username: "" });

  const goBack = () => {
    setUser({ id: 0, username: "" });
  };

  const getUser = (id: number, username: string) => {
    setUser({ id, username });
  };

  return (
    <div className="App">
      {user.id !== 0 ? (
        <Posts userId={user.id} username={user.username} goBack={goBack} />
      ) : (
        <UsersTable getUser={getUser} />
      )}
    </div>
  );
}

export default App;
