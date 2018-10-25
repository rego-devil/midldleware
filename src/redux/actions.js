import * as constants from './constants';

export const decrement = (data) => {
    return {
        type: constants.DECREMENT,
        payload: data
    }
};

export const increment = (data) => {
    return {
        type: constants.INCREMENT,
        payload: data
    }
};
