import * as constants from './constants';

const initialState = {
    count: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.INCREMENT:
            return {...state, count: state.count + action.payload.amount};

        case constants.DECREMENT:
            return {...state, count: state.count - action.payload.amount};

        default:
            return state;
  }
};
