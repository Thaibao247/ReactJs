import React from "react";
import RegisterForm from "../RegisterForm";

function Register(props) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
