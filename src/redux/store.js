import { createStore} from 'redux';
import {reducer} from './reducer';
import {increment, decrement} from './actions';


export const store = createStore(reducer);

// store.subscribe( () => console.log('count: ', store.getState().count) );

const dispatch = store.dispatch;

store.dispatch = function log(action) {
  console.log('Action before', store.getState());
  console.log('Action', action );

  const result = dispatch(action);

  console.log('Action after', store.getState());

  return result;
}

store.dispatch = function square(action) {
  action.amount = action.amount * 2;
  const result = dispatch(action);
  return result;
}

store.dispatch(increment({amount: 1}));