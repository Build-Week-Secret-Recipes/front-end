import React, { useState } from 'react'
import * as yup from "yup";
import styled from 'styled-components'

export default function signup() {

    let schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
        firstname: yup.string().required(),
        lastname: yup.string.required(),
        email: yup.string().required(),
        admin: yup.boolean(),
        user: yup.boolean()
    })

    const intialFormData = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        admin: false
    }
    const defaultErrors = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
    }

    const [formData, setFormData] = useState(intialFormData);
    const [errors, setErrors] = useState(defaultErrors)

    // Helper function to validate schema
    const setValidationErrors = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };

    // Handle change function, determines wehter an input is of type checkbox or not.
    // Updates and links our state to current changes being inputted, passes values into errors functions
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const trueValue = type === 'checkbox' ? checked : value;
        setValidationErrors(name, trueValue)
        setFormData({
            ...formData, [name]: trueValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Username:
                    <input type="text" name='username' onChange={handleChange} value={formData.username} placeholder='Enter Username' />
                </label>
                <label >Password:
                    <input type="password" name='password' onChange={handleChange} value={formData.password} placeholder='Enter Password' />
                </label>
                <label >First Name:
                    <input type="text" name='firstname' onChange={handleChange} value={formData.firstname} placeholder='Enter First Name' />
                </label>
                <label >Last Name:
                    <input type="text" name='firstname' onChange={handleChange} value={formData.lastname} placeholder='Enter Last Name' />
                </label>
                <label >Email:
                    <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Enter Email' />
                </label>
                <label >Admin:
                    <input type="checkbox" name='admin' onChange={handleChange} value={formData.admin} />
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    )
}