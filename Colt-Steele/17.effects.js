// when we change the state in a component, it will re-render

// effects are things we do after a re-render using the useEffect() hook

// the first argument useEffect takes is a callback function that runs every time the component re-render

import { useState, useEffect } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);


    useEffect(
        function myEffect() {
          console.log("MY EFFECT WAS CALLED!");
        });

    const increment = () => {
        setCount((c) => c + 1);
      };

      return (
        <div>
          <h1>{count}</h1>
          <button onClick={increment}>+1</button>
        </div>
      );
}

// useEffect can take an array as a second argument: we call it the dependency argument and it specifies when to use useEffect( on which state), if you provide an empty array: the useEffect will run only at the start

import { useState, useEffect } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);


    useEffect(
        function myEffect() {
          console.log("MY EFFECT WAS CALLED!");
        }, []);

    const increment = () => {
        setCount((c) => c + 1);
      };

      return (
        <div>
          <h1>{count}</h1>
          <button onClick={increment}>+1</button>
        </div>
      );
}

