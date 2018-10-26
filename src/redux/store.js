import { createStore} from 'redux';
import {reducer} from './reducer';
import {increment, decrement} from './actions';


export const store = createStore(reducer);

// store.subscribe( () => console.log('count: ', store.getState().count) );


const addTriple = (store) => (next) => (action) => {
    console.log('333');
    action.payload.amount = action.payload.amount * 3;
    return next(action)
}


const addDouble = (store) => (next) => (action) => {
    console.log('222');
    action.payload.amount = action.payload.amount * 2;
    return next(action)
}

const addLog = (store) => (next) => (action) => {
  console.log('Action before', store.getState());
  console.log('Action', action);
  const result = next(action);
  console.log('Action after', store.getState());
  return result;
}

const thunk = (store) => (next) => (action) => {
  if(typeof action === 'function') {
    return action(store.dispatch)
  }
  return next(action)
}

// store.dispatch = addLog(store)(store.dispatch);
// store.dispatch = addDouble(store)(store.dispatch);
// store.dispatch = addTriple(store)(store.dispatch);

const applyMiddleware = (store, ...middlewares) => {
  middlewares.reverse().forEach(middleware => store.dispatch = middleware(store)(store.dispatch))
}

applyMiddleware(store, thunk, addLog, addDouble);

// store.dispatch(increment({amount:3}));
store.dispatch( function(dispatch) {
  console.log('111')
  dispatch(increment({amount:3}))
});