import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./utils/counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1);

  const handleChange = (e) => {
    setIncrementAmount(parseInt(e.target.value, 10));
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementAmount));
  };

  return (
    <div>
      <h2>Counter: {value}</h2>
      <div>
        <input
          type="number"
          value={incrementAmount.toString()}
          onChange={handleChange}
          className="p-2 m-3 border-2"
          min={0}
        />
        <br />
        <button
          onClick={handleIncrementByAmount}
          className="p-2 m-3 border-4 border-red-300"
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="p-2 m-3 border-4"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="p-2 m-3 border-4"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
