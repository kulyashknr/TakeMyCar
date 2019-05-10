import * as actionTypes from '../constants/actionTypes'



export default function carReducer(state = [], action) {
    switch (action.type) {
      case actionTypes.ADD_CAR:
        return [...state, action.payload];
      case actionTypes.DELETE_CAR:
        return state.filter(post => car._id !== action.payload.id);
        case actionTypes.FETCH_CAR:
        return action.cars;
      default:
        return state;
    }
  }
