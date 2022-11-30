import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../Redux/state/counter/counterSlice";

const Counter = () => {

    const myNumber = useRef();
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4 className="text-white">My Counter App</h4>
            </div>
            <div className="card-body">
                <h4>{count}</h4>
                <div className="my-4">
                    <button onClick={()=>{dispatch(increment())}} className="btn btn-success">Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className="btn mx-2 btn-danger">Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={myNumber} type="number" className="form-control w-50 my-2"/>
                    <button onClick={()=>{dispatch(setCustom(myNumber.current.value))}} className="btn w-50 my-2 btn-info">Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;