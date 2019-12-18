/* jshint esversion: 6 */
import React, {useState} from 'react';
import Members from "./components/members.js";
import Form from "./components/form.js";
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Jonathan Hanson",
      email:"jhanson@me.com",
      role:"Full-Stack Engineer"
    },
    {
      id: 2,
      name: "Jon jones",
      email:"jjones@me.com",
      role:"Front-End Engineer"
    }
  ]);
  const addNewBox = box => {
  const newBox = {
    id: Date.now(),
    name: box.name,
    email: box.email,
    role: box.role
  };
  setMembers([...members, newBox]);
};
  return (
    <div className="App">
    <h1>The Team</h1>
    <Form addNewBox={addNewBox} />
    <Members members={members}/>

    </div>
  );
}

export default App;
