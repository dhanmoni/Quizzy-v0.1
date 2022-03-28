import {LOGIN_USER, REGISTER_USER, LOG_OUT_USER } from '../actions/types'
const initialState={
    loggedIn: false,
    current_user: {}
}
export default function(state= initialState, action){
    switch (action.type) {

        case REGISTER_USER: 
        return{
            ...state,
            current_user: action.payload,
            loggedIn: true
        }
        
        case LOGIN_USER: 
        return{
            ...state,
            current_user: action.payload,
            loggedIn: true
        }
        
        case LOG_OUT_USER: 
        return{
            ...state,
            current_user: {},
            loggedIn: false
        }
        default:
            return state;
    }
}