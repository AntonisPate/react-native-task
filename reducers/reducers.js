const initialState = {
  points: [],
  location_permission: false,
  loaded: false
};

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_POINT') {
    return Object.assign({}, state, {
        points: state.points.concat(action.payload)
    });
  }
  if (action.type === 'ADD_LOCATION_PERMISSION') {
    return Object.assign({}, state, {
      location_permission: state.location_permission = action.payload
    });
  }
  if (action.type === 'ADD_LOADED') {
    return Object.assign({}, state, {
      loaded: state.loaded = action.payload
    });
  }
  return state;
}

export default rootReducer;