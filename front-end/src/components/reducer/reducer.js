import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '.././actions/actions'

const initialState = {
    recipe: [],
    error: '',
    isFetching: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_START :
            return{
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_DATA_SUCCESS: 
            return {
                ...state,
                recipe: action.payload,
                error: '',
                isFetching: false,
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}

export default reducer