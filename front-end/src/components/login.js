import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from 'axios';

let schema = yup.object().shape({
    userName: yup.string().required("User Name is required"),
    password: yup.string().required("Password is required")
  });

const LogIn = () => {

    const [logIn, setLogIn] = useState({
        userName:"",
        password: ""
    });

    const [errors, setErrors] = useState({
        userName:"",
        password: ""
    });

    const [user, setUser] = useState([]);

    const setFormErrors = (userName, value) => {
        yup
          .reach(schema, userName)
          .validate(value)
          .then(() => setErrors({ ...errors, [userName]: "" }))
          .catch((err) => setErrors({ ...errors, [userName]: err.errors[0] }));
      };

      const onChange = (event) => {
        const { userName, type, value, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        setFormErrors(userName, valueToUse);
        setLogIn({ ...logIn, [userName]: valueToUse });
        console.log("Being Changed");
      };

      const submitHandler = (event) => {
        event.preventDefault();
        console.log(logIn);
        axios
          .post("https://reqres.in/api/users", form)
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

            <div class='name'>
              <label>User Name
                <input type="text" onChange={onChange} name="userName" values={logIn.userName}/>
              </label>
              <div style={{ color: "red" }}>
                  <div>{errors.userName}</div>
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