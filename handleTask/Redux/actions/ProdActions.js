import * as types from '../types'
import {endpoints, getFullUrl, services} from '../../utils';
import { API_KEY } from '../../utils/config';


export const getProdAction = (data) => {
  

    return(dispatch) => {
        dispatch({
            type: types.GET_API_DATA_START,
            payload: null
        });

   console.log("in action")
        
        services.getProduct()
        .then((res)=>{
            console.log(res)
            if(res){
                console.log(res,"res"); 
                dispatch({
                    type: types.GET_API_DATA_SUCCESS,
                    payload: res
                })
            }
            else{
                dispatch({
                    type: types.GET_API_DATA_FAIL,
                    payload: res
                })
            }
        })
    

    }
  }

  export const addProdAction = (data) => {
    
    console.log("entered")
    return(dispatch) => {
        dispatch({
            type: types.ADD_PROD_START,
            payload: null
        });
    
        services.getProdAdd(data)
        .then((res)=>{
            console.log("res",res)
            if(res){
             
                dispatch({
                    type: types.ADD_PROD_SUCCESS,
                    payload: res
                })
            }
            else{
                dispatch({
                    type: types.ADD_PROD_FAIL,
                    payload: res
                })
            }
        })
    

    }
  }