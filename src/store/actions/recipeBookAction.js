import * as actionType from './actionTypes';
import axios from '../../../axios-transfers';


export const setCategories = ( categories ) => {
    return {
        type: actionType.SET_CATEGORIES,
        categories: categories
    }
};

export const initCategories = () => {
    return dispatch => {
        axios.get("/categories.json")
             .then(
                response => {
                    const fetchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key
                        });
                    };
                    dispatch(setCategories(fetchArray));
                }
             );
    };
};