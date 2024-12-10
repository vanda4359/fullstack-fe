import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log ("action1", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state};
            copyState.genders = action.data;
            console.log ("action2", copyState)
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log ("action3", action)
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;