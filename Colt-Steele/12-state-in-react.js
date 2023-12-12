// what is a state?
// it is a mutable data specific to a component

// ask this: will this ever change?
// if so, you have to use state somehow


// what are hooks?
// they are functions given to us by react that we can incorporate and use for additional functionality
// all hooks start with the word 'use'



// to use state you must use the useState hook 
// it takes one argument( representing the state initial value)
// and returns an array of two elements:
// 1-the first one represent the state value itself
// 2-the second one is a function that changes the state value
// you must call useState inside components only
// every time we use the change state function our component will re-render to display the new state value

import {useState} from 'react'

export default function IncrementNum(){

    const [num, setNum] = useState(0);
    
    const incromentNumByOne = () => {
        setNum(num+1)
    }

    return (
        <button onClick={incromentNumByOne}>Incroment <span>{num}</span></button>
    );
}