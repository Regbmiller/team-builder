import React, { useState } from "react";

const Form = (props) => {
  
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',    
  });

  const handleChange = (event) => {
      console.log("event", event.target)
      setFormValues({...formValues, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formValues)
  }

return (
      <form onsubmit={handleSubmit}> 
      <label>
        name:
        <input 
        type="text" 
        name="name"
        value={formValues.name}
        onChange={handleChange}/>
      </label>
      <label>
        email:
        <input 
        type="text" 
        name="email"
        value={formValues.email}
        onChange={handleChange}/>
      </label>
      <label>
        role:
        <input 
        type="text" 
        name="role"
        value={formValues.role}
        onChange={handleChange}/>
      </label> 
      <button>Submit</button>   
    </form>
  );
};

export default Form;