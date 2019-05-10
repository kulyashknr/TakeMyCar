import { ADD_POST, DELETE_POST, FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/cars/';

export const createPost = ({ model, mark, color, owner, year }) => {
    console.log("i am here");
    return (dispatch) => {
        return axios.post(`${apiUrl}`, {model, mark, color, owner, year})
            .then(response => {
                console.log(response.data);
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess =  (data) => {
    return {
        type: ADD_POST,
        payload: {
            _id: data._id,
            model: data.model,
            mark: data.mark,
            owner: data.owner,
            year: data.year,
            color: data.color
        }
    }
};

export const deletePostSuccess = id => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
}

export const deletePost = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}${id}/`)
            .then(response => {
                dispatch(deletePostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST,
        posts
    }
};

export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};
