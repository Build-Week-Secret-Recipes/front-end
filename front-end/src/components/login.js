import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const credentials = {
    username: '',
    password: ''
}

const Login = () => {

const [values, setValues] = useState(credentials)

let {push} = useHistory();

const handleChange = (e) => {

setValues({
    ...values,
    [e.target.name]: e.target.value
})

};

const handleSubmit = (e) =>  {

    e.preventDefault()
    axios.post("http://localhost:5000/api/login", values)
         .then(res => {
             localStorage.setItem("token", res.data.payload)
             push("/protected")
         })
         .catch(err => console.log(err))
};

return (
    <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
            />
            <button>Login</button>
        </form>
)

};

export default Login;
