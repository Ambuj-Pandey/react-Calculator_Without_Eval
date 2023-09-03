import { useReducer } from 'react';
import Digit from './Digit';
import OperationButton from './OperationButton';
import './App.css';

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}
const reducer = (state, action) =>{

}

function App() {
const[{ curr, prev, oper}, dispatch ] = useReducer(reducer, {});

  return (
    <div className='Calculator-grid'>
      <div className='Ouput'>
        <div className='PrevOP'>{prev} {oper}</div>
        <div className='CurOP'>{curr}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <Digit digit="1" dispatch={dispatch} />
      <Digit digit="2" dispatch={dispatch} />
      <Digit digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <Digit digit="4" dispatch={dispatch} />
      <Digit digit="5" dispatch={dispatch} />
      <Digit digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <Digit digit="7" dispatch={dispatch} />
      <Digit digit="8" dispatch={dispatch} />
      <Digit digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <Digit digit="." dispatch={dispatch} />
      <Digit digit="0" dispatch={dispatch} />
      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
