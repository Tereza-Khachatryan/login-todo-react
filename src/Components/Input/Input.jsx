import React from "react";
import "../Input/Input.scss"

const Input = ({ value, onChange, className, type, name, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder} 
    // type="checkbox" 
    // className="checkbox"
    // checked={task.checked}
    // onChange={() => handleCheckbox(task.id)}  // Use task.id instead of index

    />
  );
};
  
export default Input;
  