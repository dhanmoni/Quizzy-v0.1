import { 
    GET_POSTS
} from './types'

export const getPosts = () => dispatch  => {
    console.log("get post called!!")
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => console.log(response.json()))
    // .then(json => console.log(json))
    // .catch(err=> console.log(err))
    // dispatch({
    //     type: GET_POSTS,
    //     payload: {
    //         "question" : "What the fuck?",
    //         "options" : ['a', 'b', 'c'],
    //         "answer": 'a'
    //     }
    // })
}
