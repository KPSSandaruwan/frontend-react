import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../constants/actions/gameActions";

const CountWithRedux = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
export default CountWithRedux;