import * as actionType from './actionTypes';
import axios from '../../../axios-root';


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
             )
             .catch(error => console.log(error));
    };
};

export const deleteCategory = ( id ) => {
    return dispatch => {
        axios.delete('./categories/' + id + '.json')
             .then(response => {console.log(response)})
             .catch(error => console.log(error));
        dispatch(initCategories());
    };
}

export const addCategory = ( categoryName ) => {
    const data = {name: categoryName};
    return dispatch => {
        axios.post('/categories.json', data)
             .then(response => console.log(response))
             .catch(error => console.log(error));
        dispatch(initCategories());
    };
}