import React, { useState } from "react";

export const UserInput = ({ value, placeholder, label, onNumberInput, field}) => {
  //const [isEditing, setisEditing] = useState(false);

  const [number, setNumber] = useState(0);

  function handleChange(event){
    setNumber(event.target.value)
    onNumberInput(field, number);
  }

  return (
    <p>
      <label>{label}</label>
      <input value={value} required type="number" placeholder={placeholder} onChange={handleChange}/>
    </p>
  );
};
