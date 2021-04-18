// import * as actionTypes from './actions';
// const initialState = {
//     counter:80,
//     results:[]
// }
// const reducer = (state = initialState, action) =>{
//     // console.log(action.type);
//     switch(action.type){
//         case actionTypes.INCREMENT:
//             const newStateCounter = Object.assign({}, state);
//             newStateCounter.counter = state.counter + 1;
//             return newStateCounter
//         case actionTypes.DECREMENT:
//             return{
//                 ...state,
//                 counter:state.counter - 1
//             }
//         case actionTypes.SUBSTRACT:
//                 return{
//                     ...state,
//                     counter:state.counter - action.val
//                 }
//         case actionTypes.ADD_FIVE:
//                 return{
//                     ...state,
//                     counter:state.counter + action.val
//                 }
//         case actionTypes.RESULT_STORE:
//                 return{
//                     ...state,
//                     results: state.results.concat({id:new Date(),value:state.counter})       
//                 }
                
//         case actionTypes.DELETE_RESULT:
//             const updatedArr = state.results.filter(cur => cur.id !== action.elementId);
//                 return{
//                     ...state,
//                     results: updatedArr
//                 }
//     }
   
//     return state;
// }
// export default reducer;