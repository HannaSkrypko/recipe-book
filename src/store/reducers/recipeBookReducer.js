import * as actionType from '../actions/actionTypes';

const initialState = {
    categories: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        default:
            return state;
    };
}

export default reducer;