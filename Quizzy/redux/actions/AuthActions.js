import { 
    REGISTER_USER,
    LOGIN_USER,
    LOG_OUT_USER,
    GET_CURRENT_USER
} from './types'

export const registerUser = () => dispatch  => {
    console.log("register user called!!")
    // register user by calling firebase api
    // dispatch the registerUser action and pass response to get stored in redux
        // dispatch({
        //     type: REGISTER_USER,
        //     payload: res
        // })
}

export const loginUser = () => dispatch  => {
    console.log("login user called!!")
    // login user by calling firebase api
    // dispatch the loginUser action and pass response to get stored in redux
        // dispatch({
        //     type: LOGIN_USER,
        //     payload: res
        // })
}

export const logoutUser = () => dispatch  => {
    console.log("logout user called!!")
    // logout user by calling firebase api
    // dispatch the logoutUser action and pass response to get stored in redux
        // dispatch({
        //     type: LOGOUT_USER,
        //     payload: res
        // })
}

export const getCurrentUser = () => dispatch  => {
    console.log("get current user called!!")
    // get current user by calling firebase api
    // dispatch the getCurrentUser action and pass response to get stored in redux
        // dispatch({
        //     type: GET_CURRENT_USER,
        //     payload: res
        // })
}
