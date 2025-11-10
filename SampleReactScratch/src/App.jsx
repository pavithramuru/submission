import React from "react";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import TodoList from "./components/ToDoList";
import FIX_ERROR_01 from "./components/FIX_ERROR_01";
import PeopleProvider from "./components/PeopleProvider";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        marginTop: "50px",
        lineHeight: "1.6",
      }}
    >
      <Greeting />
      <Welcome />
      <Thoughts />
      <TodoList />
      <FIX_ERROR_01/>
      <PeopleProvider />
    </div>
  );
};

export default App;
