import { 
    GET_POSTS,
    ADD_POST,
    SET_LOADING,
    SET_ERROR,
    GET_PROFILE_POSTS,
    DELETE_POST
} from './types'

import { firestoreDB,auth} from '../../Firebase/firebaseConfig'

import { addDoc, collection, getDocs, query, where, deleteDoc, doc} from 'firebase/firestore'

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


export const getProfilePosts = () => dispatch  => {
    // initially set the loading step to true, so that a loader can be shown
    dispatch({
        type: SET_LOADING
    })
    console.log("get post called!!")
    // call firebase api and retrieve posts
    // dispatch the getPost action and pass response to get stored in redux
    const uid = auth.currentUser.uid
    const colRef = query(collection(firestoreDB, 'Posts'), where("Author", "==", uid));

    let postss = []
    getDocs(colRef)
        .then(snapshot => {
            snapshot.docs.forEach(doc=> {
                console.log(doc.data())
                console.log(doc.data().Author.id)
                postss.push({...doc.data(), id: doc.id})
            })
        })
        .then(()=>
            dispatch({
                type: GET_PROFILE_POSTS,
                payload: postss
            }
            )
        )
        .catch(()=> {
            dispatch({
                type: SET_ERROR
            })
        })
}

export const deletePosts = (post)  => {
  
   deleteDoc(doc(firestoreDB, "Posts", post.id))

  }