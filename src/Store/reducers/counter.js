import * as actionTypes from '../actions';
const initialState = {
    counter:80
}
const reducer = (state = initialState, action) =>{
    // console.log(action.type);
    switch(action.type){
        case actionTypes.INCREMENT:
            const newStateCounter = Object.assign({}, state);
            newStateCounter.counter = state.counter + 1;
            return newStateCounter
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter:state.counter - 1
            }
        case actionTypes.SUBSTRACT:
                return{
                    ...state,
                    counter:state.counter - action.val
                }
        case actionTypes.ADD_FIVE:
                return{
                    ...state,
                    counter:state.counter + action.val
                }
    }
   
    return state;
}
export default reducer;