import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import   './Counter.css';
class Counter extends Component {
  
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.increment} />
                <CounterControl label="Decrement" clicked={ this.props.decrement}  />
                <CounterControl label="Add 5" clicked={this.props.addFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.substract}  />
                <hr/>
                {/* <button onClick={this.props.onResultStore}>store result</button> */}
                <a 
                href="#" 
                className="btn-full"
                onClick={() =>this.props.onResultStore(this.props.ctr)}>
                    store result
                </a> 
                <ul>
                    {this.props.resultCounter.map(result =>(
                          <li key={result.id} onClick={() =>this.props.onDeleteResultStore(result.id)}>
                          {result.value}
                          </li>
                    )
                    )}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{  
    return {
        ctr:state.ctr_red.counter,
        resultCounter:state.res_red.results
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch({ type: actionTypes.INCREMENT }),
      decrement: () => dispatch({ type: actionTypes.DECREMENT }),
      addFive: () => dispatch({ type: actionTypes.ADD_FIVE, val:5}),
      substract: () => dispatch({ type: actionTypes.SUBSTRACT, val:5 }),
      onResultStore: (value) => dispatch({ type: actionTypes.RESULT_STORE, valueCounter:value}),
      onDeleteResultStore: (id) => dispatch({ type: actionTypes.DELETE_RESULT, elementId:id }),
    }
  }
//   export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

