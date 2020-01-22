import React, { useState } from "react";
import Cards from './components/Cards';
import Form from './components/Form';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: "id",
      name: "name",
      email: "email",
      role: "role"      
    }
  ]);

  const addMember = member => {
    console.log(member)
  }

  return (
    <div className="App">
      {teamMember.map((member, id) =>
        <Cards member={member} />
      )}
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
