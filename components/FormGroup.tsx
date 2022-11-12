import React from "react";

const FormGroup = ({ htmlFor, label, children }) => {
  return (
    <label htmlFor={htmlFor} className="flex flex-col">
      {label}

      {children}
    </label>
  );
};

export default FormGroup;
