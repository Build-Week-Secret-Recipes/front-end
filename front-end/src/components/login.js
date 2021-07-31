import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from 'axios';

let schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
  });

const LogIn = () => {

    const [logIn, setLogIn] = useState({
        username:"",
        password: ""
    });

    const [errors, setErrors] = useState({
        username:"",
        password: ""
    });

    const [user, setUser] = useState([]);

    const [disabled, setDisabled] = useState(true);

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
        console.log("Being Changed");
      };

      const submitHandler = (event) => {
        event.preventDefault();
        console.log(logIn);
        axios
          .post("https://reqres.in/api/users")
          .then((res) => {
            setUser([...user,res.data]);
            console.log("success", res);
          })
          .catch((err) => {
            debugger;
          });
      };

      console.log(axios.post)
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
                <button disabled={disabled}>Submit</button>
              </div>

          </div>
        </form>
      )



};

export default LogIn; 