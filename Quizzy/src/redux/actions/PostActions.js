import { 
    GET_POSTS,
    ADD_POST
} from './types'

export const getPosts = () => dispatch  => {
    console.log("get post called!!")
    // call firebase api and retrieve posts
    // dispatch the getPost action and pass response to get stored in redux
    // EXAMPLE----
//     let posts = [];
//     db.collection("Posts")
//       .get()
//       .then((snapshot) => {
//         snapshot.docs.forEach((doc) => {
//           const post = {
//             question: doc.data().question,
//             options: doc.data().options,
//             answer: doc.data().answer,
//             id: doc.id,
//             author: doc.data().author,
//             Date: doc.data().Date,
//           };
//           posts.push(post);
//         });
//       })
//       .then(() =>
//         dispatch({
//           type: GET_POSTS,
//           payload: posts,
//         })
//       )
//       .catch((err) => console.log(err));
//   };
}

export const addPost = () => dispatch  => {
    console.log("add post called!!")
    // call firebase api and add post
    // dispatch the addPost action and pass response to get stored in redux
    // example ------
    // dispatch({
    //     type: GET_POSTS,
    //     payload: res
    // })
}