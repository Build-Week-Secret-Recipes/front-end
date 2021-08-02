import axios from 'axios'

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getData = (dispatch) => {
    dispatch({ type: FETCH_DATA_START });
    axios.get('https://secret-recipes-backend.herokuapp.com/api/recipe')
    .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.recipe})
    })
    .catch(err => {
        console.log('err', err.response);
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: `${err.response.status} ${err.response.recipe}`
    })
}