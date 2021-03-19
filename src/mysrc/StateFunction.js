import React, {useState} from 'react';

const StateFunction = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const countPlus = () => setCount(count + 1);
    const count2Plus = () => setCount2(count2 + 2);
    return (
        <div>
            <div>{count}</div>
            <button onClick={countPlus}>+1</button>
            <div>{count2}</div>
            <button onClick={() => {setCount2(count2 + 2)}}>+2</button>
        </div>
    );
}

export default StateFunction
