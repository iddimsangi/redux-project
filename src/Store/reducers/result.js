import * as actionTypes from '../actions';
const initialState = {
    results:[]
}
const reducer = (state = initialState, action) =>{
    // console.log(action.type);
    switch(action.type){
        case actionTypes.RESULT_STORE:
                return{
                    ...state,
                    results: state.results.concat({id:new Date(),value:action.valueCounter})       
                }
                
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter(cur => cur.id !== action.elementId);
                return{
                    ...state,
                    results: updatedArr
                }
    }
   
    return state;
}
export default reducer;