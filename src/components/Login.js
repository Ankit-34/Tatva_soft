import React from "react";
import "../style/Login.css";
import {Link} from 'react-router-dom'
import schema from '../Schema/Login_Schema'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit: (values, action) => {
        localStorage.setItem("status", true);
        console.log("Login values : ",values);
        action.resetForm();
      },
    });

  // console.log(errors);
  return (
    <div>
      <h1> Login </h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          className="lemail"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        ></TextField>
        {errors.email && touched.email ? <p> {errors.email} </p> : null}
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          className="lpassword"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        ></TextField>
        {errors.password && touched.password ? (
          <p> {errors.password} </p>
        ) : null}
        <Button variant="outlined" className="btn-register" type="submit">
          Login
        </Button>
      </form>

        <div> 
            <p> Don't Have an account ? 
                <Link to="/register">Create Now</Link>
            </p>
        </div>

    </div>
  )
};

export default Login;