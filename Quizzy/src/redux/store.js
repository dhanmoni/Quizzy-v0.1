import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import thunk from "redux-thunk" 

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  timeout: null,
  key:'root',
  storage: AsyncStorage,
}
let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(
    persistedReducer,
    composeEnhancers(
    applyMiddleware(thunk)
  )
)
export const persistor = persistStore(store)

