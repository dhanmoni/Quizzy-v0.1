import { auth, firestoreDB } from '../../Firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, setDocs, getFirestore, namedQuery } from 'firebase/firestore'
import { firebase } from '@react-native-firebase/firestore';
import { 
    REGISTER_USER,
    LOGIN_USER,
    LOG_OUT_USER,
    GET_CURRENT_USER,
} from './types'


export const registerUser = (email, password) => dispatch  => {
    // register user by calling firebase api
    // dispatch the registerUser action and pass response to get stored in redux
        // dispatch({
        //     type: REGISTER_USER,
        //     payload: res
        // })

        createUserWithEmailAndPassword(auth, email, password)
            .then((resp) => {
            console.log("Show something")
            return firebase.firestore()
                .collection('Users')
                .doc(resp.user.uid)
                .set({
                    name: name,
                    email: email
                });
            })
            .then(() => { 
                dispatch({type: REGISTER_USER});
            })
            .catch((error) => {console.log(error); alert('Some Problem');
        });
}

export const loginUser = (email,password) => dispatch  => {
    // login user by calling firebase api
    // dispatch the loginUser action and pass response to get stored in redux
        // dispatch({
        //     type: LOGIN_USER,
        //     payload: res
        // })
        signInWithEmailAndPassword(auth, email, password)
            .then((resp) => {
            return dispatch
            ({
                type: LOGIN_USER,
                payload: resp
            });

            
        }).catch((error) => {console.log(error); alert('Email/Password Wrong');
    });    

}

export const logoutUser = () => dispatch  => {
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

