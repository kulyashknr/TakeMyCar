import * as actionTypes from './constants/actionTypes'
import axios from 'axios';
import { FETCH_CAR } from '../constants/actionTypes';

const apiUrl = 'http://localhost:4000/cars';

export const createCar = ({ model, mark, year, color, owner }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/add`, {model, mark, year, color, owner})
        .then(response => {
          dispatch(createCarSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};

export const createCarSuccess =  (data) => {
    return {
      type: actionTypes.ADD_CAR,
      payload: {
        _id: data._id,
        model: data.model,
        year: data.year,
        color: data.color,
        owner: data.owner
      }
    }
  };

export const fetchCars = (cars) => {
    return {
      type: FETCH_CAR,
      cars
    }
  };

export const fetchAllCars = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchCars(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };