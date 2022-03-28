import {combineReducers} from 'redux';
import PostReducer from './PostReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    post: PostReducer,
    auth: AuthReducer
})