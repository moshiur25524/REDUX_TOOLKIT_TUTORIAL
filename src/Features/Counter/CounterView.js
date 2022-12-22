import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './CounterSlice';

const CounterView = () => {
    const count = useSelector(store => store.counter.count)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increaseByAmount(5))}>IncreaseByFive</button>
        </div>
    );
};

export default CounterView;