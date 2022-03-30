import {LOGIN_USER, REGISTER_USER, LOG_OUT_USER } from '../actions/types'
const initialState={
    loggedIn: false,
    currentUser: {}
}
export default function(state= initialState, action){
    switch (action.type) {

        case REGISTER_USER: 
        return{
            ...state,
            currentUser: action.payload,
            loggedIn: true
        }
        
        case LOGIN_USER: 
        return{
            ...state,
            currentUser: action.payload,
            loggedIn: true
        }
        
        case LOG_OUT_USER: 
        return{
            ...state,
            currentUser: {},
            loggedIn: false
        }
        default:
            return state;
    }
}