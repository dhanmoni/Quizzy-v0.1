import {GET_POSTS, ADD_POST, SET_ERROR, SET_LOADING } from '../actions/types'
const initialState={
    loading:false,
    posts: [],
    error: false
}
export default function(state= initialState, action){
    switch (action.type) {

        case GET_POSTS: 
        return{
            ...state,
            posts: action.payload,
            loading:false
        }

        case ADD_POST: 
        return{
            ...state,
            loading:false
        }

        case SET_LOADING:
        return {
            ...state,
            loading:true     
        }

        case SET_ERROR:
        return {
            ...state,
            error:true     
        }
        
        default:
            return state;
    }
}