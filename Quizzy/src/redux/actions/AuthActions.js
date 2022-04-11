import { auth, firestoreDB } from '../../Firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { 
    REGISTER_USER,
    LOGIN_USER,
    LOG_OUT_USER,
    GET_CURRENT_USER,
    SET_LOADING,
    SET_ERROR,
    REMOVE_LOADING
} from './types'


export const registerUser = (email, password, name) => dispatch  => {
    // register user by calling firebase api
    // dispatch the registerUser action and pass response to get stored in redux
    dispatch({
        type: SET_LOADING
    })
    createUserWithEmailAndPassword(auth, email, password)
        .then(async(res) => {
            console.log(res)
            const data = {
                name,
                email
            }
            const uid = res.user.uid
            try{
                // use setDoc to store the id of user as the documentID in firestore
                await setDoc(doc(firestoreDB, "Users", uid), data);
                dispatch({
                    type: REGISTER_USER,
                    payload: {...data, id: uid }
                })
            } catch(err){
                console.log(err)
                dispatch({
                    type: SET_ERROR
                })
            }
        })
        .then(()=> {
            dispatch({
                type: REMOVE_LOADING
            })
        })
        .catch((error) => {
            console.log(error)
            dispatch({
            type: SET_ERROR
        })
    });
}

export const loginUser = (email,password) => dispatch  => {
    // login user by calling firebase api
    // dispatch the loginUser action and pass response to get stored in redux
    dispatch({
        type: SET_LOADING
    })
    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res)
            const uid = res.user.uid
            const docRef = doc(firestoreDB, 'Users', uid)
            getDoc(docRef)
                .then(doc => {
                    console.log(doc)
                    if (doc.exists()) {
                        const user_data = doc.data()
                        dispatch({
                            type: LOGIN_USER,
                            payload: {...user_data, id: uid }
                        })
                    } else {
                        console.log("User does not exist anymore.")
                        return;
                    }
                })
                .then(()=> {
                    dispatch({
                        type: REMOVE_LOADING
                    })
                })
                .catch(error => {
                    console.log(error)
                    dispatch({
                        type: SET_ERROR
                    })
                });
        }
    )
    .catch((error) => {
        console.log(error)
        dispatch({
            type: SET_ERROR
        })
    });    

}

export const logoutUser = () => dispatch  => {
    // logout user by calling firebase api
    // dispatch the logoutUser action and pass response to get stored in redux
    signOut(auth)
        .then(() => 
        dispatch({type: LOG_OUT_USER}))
            .catch((error) => {
                console.log(error)
                dispatch({type: SET_ERROR})
    });
        
       
}


