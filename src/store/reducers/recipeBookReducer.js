import * as actionType from '../actions/actionTypes';

const initialState = {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_CATEGORIES:
            return  {
                ...state,
                categories: action.categories,
            }
        default:
            return state;
    };
    return state;
}

export default reducer;