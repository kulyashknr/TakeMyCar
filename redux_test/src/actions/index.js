import axios from 'axios';
import {ADD_CAR, FETCH_CAR, DELETE_CAR } from '../constants/actionTypes';

const apiUrl = 'http://localhost:4000/cars';

export const createCar = ({ model, mark, year, color, owner }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/`, {model, mark, year, color, owner})
        .then(response => {
          console.log("i am here2")
          console.log(response.data)
          dispatch(createCarSuccess(response.data))
        })
        .catch(error => {
          console.log("i am here")
          throw(error);
        });
    };
};

export const createCarSuccess =  (data) => {
    return {
      type: ADD_CAR,
      payload: {
        _id: data._id,
        model: data.model,
        year: data.year,
        color: data.color,
        owner: data.owner
      }
    }
  };

export const deleteCarSuccess = id => {
    return {
      type: DELETE_CAR,
      payload: {
        id
      }
    }
  }
  
export const deleteCar = id => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/delete/${id}`)
        .then(response => {
          dispatch(deleteCarSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
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