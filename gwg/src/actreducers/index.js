import {
    FETCH_SUCCESS,
    FETCH_FAILED,
    ADD_ACT,
    ADD_SUCCESS,
    ADD_FAILED,
    GET_ACTS,
  } from '../actions/actactions';
  
  
  
  const initialState = {
    acts: [],
    fetchingActs: false,
    addingAct: false,
    updatingAct: false,
    deletingAct: false,
    error: null
  }
  
  const reducer = (state = initialState, action) => {
    switch(action.type){
      case GET_ACTS:
        return {
          ...state,
          fetchingActs: true
        }
      case FETCH_SUCCESS:
        return {
          ...state,
          fetchingAct: false,
          acts: action.payload,
          error: null
        }
      case FETCH_FAILED:
        return {
          ...state,
          fetchingActs: false,
          error: action.payload
        }
      case ADD_ACT:
        return{
          ...state,
          addingAct: true
        }
      case ADD_SUCCESS:
        return{
          ...state,
          addingAct: false,
          acts: action.payload,
          error: null
        }
      case ADD_FAILED:
        return{
          ...state,
          addingAct: false,
          error: action.payload
        }
  
  
        default:
      return state;  
    }
  }
  
  export default reducer;
  
