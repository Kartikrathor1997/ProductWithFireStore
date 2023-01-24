import ProdReducer from "./ProdReducer";
import { combineReducers } from "redux";

const root = combineReducers({
    prod: ProdReducer,
})

const rootReducer = (state, action) =>{
    return root(state, action);
};

export default rootReducer;