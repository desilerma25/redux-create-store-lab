// write your createStore function here
// function should take in reducer are arg.
function createStore(candyReducer) {
  // need to declare but not assign state
  let state;

  function getState() {
    // needs to return current state
    return state;
  };

  function dispatch(action) {
    // takes action as arg.
    //update state w/ reducer and call render
    state = candyReducer(state, action)
    render();
  }
  // return obj. that contains getState and dispatch
  return {
    getState,
    dispatch
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// Use your createStore function and the functions provided here to create a store.
// set store to the return value of createStore when the reducer is passed
let store = createStore(candyReducer)
// Once the store is created, call an initial dispatch.
// this dispatch is passed an action that will hit default to initialize our state
store.dispatch({type: '@@INIT'})