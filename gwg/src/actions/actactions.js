import axios from 'axios';


export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const ADD_ACT = 'ADD_ACT';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';
export const GET_ACTS = 'GET_ACTS';
// export const DELETE_ACT = 'DELETE_ACT';
// export const DELETE_SUCCESS = 'DELETE_SUCCESS';



const URL = 'http://localhost:3333/gwg';

export const getActs = () => dispatch => {
  dispatch({ type: GET_ACTS });
  axios 
    .get(URL)
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAILED,
        payload: err
      })
    })
}

export const addAct = actInfo => dispatch => {
  axios
    .post(URL, actInfo)
    .then(res => {
      dispatch({
        type: ADD_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_FAILED,
        payload: err
      })
    })
}
