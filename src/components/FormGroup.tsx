import React from "react";

interface Props {
  htmlFor: string;
  label: string;
  children: JSX.Element;
  subtitle?: string;
}

const FormGroup = ({ htmlFor, label, children, subtitle }: Props) => {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2 my-6">
      {label}
      <p>{subtitle}</p>
      {children}
    </label>
  );
};

export default FormGroup;
