import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from 'axios';
import axiosWithAuth from './helpers/axiosWithAuth'

let schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
  });

const LogIn = () => {

  const initialState = {
    username: '',
    password: ''
  }

    const [logIn, setLogIn] = useState({initialState});

    const [errors, setErrors] = useState({initialState});


    const [user, setUser] = useState([]);

    const [disabled, setDisabled] = useState(false);

    const setFormErrors = (username, value) => {
        yup
          .reach(schema, username)
          .validate(value)
          .then(() => setErrors({ ...errors, [username]: "" }))
          .catch((err) => setErrors({ ...errors, [username]: err.errors[0] }));
      };

      const onChange = (event) => {
        const { username, type, value, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        setFormErrors(username, valueToUse);
        setLogIn({ ...logIn, [username]: valueToUse });
        console.log("Being Changed", valueToUse);
      };

      const submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth()
          .post("/login", logIn)
          .then((res) => {
            localStorage.setItem('token', res.data.payload)
            setUser([...user,res.data]);
            console.log("success", res);
          })
          .catch((err) => {
            console.log("This is the OOPSIE", err);
          });
      };

      useEffect(() => {
        schema.isValid(logIn).then((valid) => setDisabled(!valid));
      }, [logIn]);

      return (
        <form className='form container' onSubmit={submitHandler}>
          <div className='form-div'>

            <div class='Username'>
              <label>Username
                <input type="text" onChange={onChange} name="username" values={logIn.username}/>
              </label>
              <div style={{ color: "red" }}>
                  <div>{errors.username}</div>
              </div>
            </div>

            <div class='password'>
            <label>Password
                <input onChange={onChange} name="password" type="password" values={logIn.password}/>
              </label>
              <div style={{ color: "red" }}>
                  <div>{errors.password}</div>
              </div>
            </div>

            <div className='submit' name="submit">
                <button disabled={false}>Submit</button>
              </div>

          </div>
        </form>
      )



};

export default LogIn; 