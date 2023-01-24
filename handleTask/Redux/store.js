import { exp } from 'react-native/Libraries/Animated/Easing';
import {createStore, applyMiddleware, compose} from 'redux'
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './reducers/rootReducer';
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const persistConfig = {
    key: '@prcStore-21',
    storage: ExpoFileSystemStorage,
    stateReconciler: autoMergeLevel2,
    whitelist:['news']
}


const pReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(
    pReducer,
    __DEV__
    ? composeWithDevTools(applyMiddleware(ReduxThunk)):
    applyMiddleware(ReduxThunk)
)

const persistor = persistStore(store)



export {persistor};
export default store;
