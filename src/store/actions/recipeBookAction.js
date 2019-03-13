import * as actionType from './actionTypes';
import axios from '../../../axios-transfers';
import { setCategories } from '../../../../itechart/react_projects/react-money-keeper/src/store/actions/transfer';

export const serCategories = (categories) => {
    return {
        type:actionType.SET_CATEGORIES,
        categories: categories,
    }
}

export const initCategories = () => {
    return dispatch => {
        axios.get("/categories.json")
             .then(
                response => {
                    const frtchArray = [];
                    for (let key in response.data) {
                        fetchArray.push({
                            ...response.data[key],
                            id: key,
                        });
                    }
                    dispatch(setCategories(fetchArray))
                }
             )
    }
}