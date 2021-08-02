import axios from 'axios';
const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
       headers: {
        authorization: token,
    },
    baseURL: 'https://secret-recipes-backend.herokuapp.com/api/',
  })
}
export default axiosWithAuth