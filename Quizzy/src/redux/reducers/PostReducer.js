import {GET_POSTS } from '../actions/types'
const initialState={
    loading:false,
    posts: [],
    text: "Hello World!!!",
    postCount: 0

}
export default function(state= initialState, action){
    switch (action.type) {

        case GET_POSTS: 
        return{
            ...state,
            posts: [action.payload, ...state.posts],
            loading:false
        }
        
        default:
            return state;
    }
}