import * as types from '../types'

const init_state = {

    data:null,
    prodData:null,
    addProd:null,
    delProd:null,
    updateProd:null
}


 const ProdReducer = (state = init_state, action)  => {
    switch(action.type){
        case types.GET_API_DATA_START : {
            return{
                ...state,
                prodData:null
            }
        }
        case types.GET_API_DATA_SUCCESS : {
            return{
                ...state,
                prodData:action.payload
            }
        }

        case types.GET_API_DATA_FAIL : {
            return{
                ...state,
                prodData:null
            }
        }
    
        //ADD PROD
        case types.ADD_PROD_START : {
            return{
                ...state,
                addProd:null
            }
        }
        case types.ADD_PROD_SUCCESS : {
            return{
                ...state,
                addProd:action.payload
            }
        }

        case types.ADD_PROD_FAIL : {
            return{
                ...state,
                addProd:null
            }
        }

         //UPDATE DATA PROD
         case types.UPDATE_PROD_START : {
            return{
                ...state,
                updateProd:null
            }
        }
        case types.UPDATE_PROD_SUCCESS : {
            return{
                ...state,
                updateProd:action.payload
            }
        }

        case types.UPDATE_PROD_FAIL : {
            return{
                ...state,
                updateProd:null
            }
        }

        
         //DELETE DATA PROD
         case types.DELETE_PROD_START : {
            return{
                ...state,
                delProd:null
            }
        }
        case types.DELETE_PROD_SUCCESS : {
            return{
                ...state,
                delProd:action.payload
            }
        }

        case types.DELETE_PROD_FAIL : {
            return{
                ...state,
                delProd:null
            }
        }
    
    
    
    
    
    }
    return state;
}

export default ProdReducer;