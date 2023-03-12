import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import bycrpt from 'bcrypt.js'
import "./login.css";
const SignInPage = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    verify: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(values);

    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    if (result.auth) {
      localStorage.setItem("_id", result.user[0]._id);

      localStorage.setItem("email", result.user[0].email);
      localStorage.setItem("username", result.user[0].username);
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("pleease enter correct details");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="text-center m-5-auto">
        <h2 className="signin_tit">Sign in</h2>
        <form className="login_f" onSubmit={handleLogin}>
          <p>
            <label>Username or email address</label>
            <br />
            <input type="text" name="username" required onChange={onChange} />
          </p>
          <p>
            <label>Password</label>
            <Link to="/otp">
              <label className="right-label">Verify User?</label>
            </Link>
            <br />
            <input
              type="password"
              name="password"
              required
              onChange={onChange}
            />
          </p>

          <button id="sub_btn" type="submit" className="btn_login">
            Login
          </button>
        </form>
        <footer>
          <p>
            Don't have account ? <Link to="/signup">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </>
  );
};

export default SignInPage;
