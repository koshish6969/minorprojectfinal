import { useState } from "react";
import "./signup.css";
import FormInput from "../form/FormInput.js";

import { useNavigate } from "react-router-dom";
const SignUp = () => {
  window.scrollTo(0, 0);
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    ContactNo: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "ContactNo",
      type: "text",
      errorMessage: "Please enter valid phone number!",
      placeholder: "Contact No.",
      label: "ContactNo",
      pattern: "^[0-9]+$",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    // console.log(data['data']['userID']);
    if (result) {
      localStorage.setItem("_id", data["data"]["_id"]);
      localStorage.setItem("email", data["data"]["email"]);
      // localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/otp");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values);
  return (
    <>
      <div className="app">
        <h1 className="btn_reg">Register</h1>
        <form className="signup_f" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button className="btn_signup">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
