import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://secret-recipes-backend.herokuapp.com/api/auth',
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `${token}`
        }
    })
}

export default axiosWithAuth