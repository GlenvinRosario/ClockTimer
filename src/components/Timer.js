import React from 'react';
import './Timer.css';
import {decreaseCounter, increaseCounter} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const Timer = () => {
    const value = useSelector((state)=> state.count);
    const dispatch = useDispatch();

    const addValue = () => {
        dispatch(increaseCounter(value));
    };

    const subtractValue = () => {
        dispatch(decreaseCounter(value))
    };

    return (
        <div className="container">
            <div className="counter">
                <h1>Counter App</h1>
                <p className="counter-value">{value}</p>
                <div className="button-div">
                    <button className="increment-btn" onClick={addValue}>
                        Increment
                    </button>
                    <button className="decrement-btn" onClick={subtractValue}>
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
