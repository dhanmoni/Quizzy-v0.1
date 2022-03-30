import { 
    GET_POSTS,
    ADD_POST,
    SET_LOADING,
    SET_ERROR
} from './types'

import { firestoreDB} from '../../Firebase/firebaseConfig'

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

export const getPosts = () => dispatch  => {
    // initially set the loading step to true, so that a loader can be shown
    dispatch({
        type: SET_LOADING
    })
    console.log("get post called!!")
    // call firebase api and retrieve posts
    // dispatch the getPost action and pass response to get stored in redux
    const colRef = collection(firestoreDB, 'Posts')

    let posts = []
    getDocs(colRef)
        .then(snapshot => {
            snapshot.docs.forEach(doc=> {
                console.log(doc.data())
                console.log(doc.data().Author.id)
                posts.push({...doc.data(), id: doc.id})
            })
        })
        .then(()=>
            dispatch({
                type: GET_POSTS,
                payload: posts
            }
            )
        )
        .catch(()=> {
            dispatch({
                type: SET_ERROR
            })
        })
}

export const addPost = (postData) => dispatch  => {
    console.log("add post called!!")
    // call firebase api and add post
    // dispatch the addPost action and pass response to get stored in redux
    // initially set the loading step to true, so that a loader can be shown
    dispatch({
        type: SET_LOADING
    })
    console.log("get post called!!")
    // call firebase api and retrieve posts
    // dispatch the getPost action and pass response to get stored in redux
    const colRef = collection(firestoreDB, 'Posts')

    addDoc(colRef, {
        Question: postData.Question,
        Options: postData.Options,
        Answer: postData.Answer,
        Author: postData.Author,
        AuthorName: postData.AuthorName
    })
        .then(()=>
            dispatch({
                type: ADD_POST
            }
            )
        )
        .catch(()=> {
            dispatch({
                type: SET_ERROR
            })
        })
}

