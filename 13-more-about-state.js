// when the change state function depends on the previous state value we use a callback function, that callback will have access to the current state value

import {useState} from 'react'

export default function IncrementNum(){

    const [num, setNum] = useState(0);
    
    const incromentNumByOne = () => {
        setNum(currentNum => currentNum+1)
    }

    return (
        <button onClick={incromentNumByOne}>Incroment <span>{num}</span></button>
    );
}


// rather than passing the state value directly, we can pass a function to useState() that will set and return the state value






// the state intial value can be an object or an array, but updating the values of these mutable data types is a little bit different: when you update them you must:
//1- create a completely new data structure( by spresading the original one).
//2- update the value in the new data structure.
//3- pass the new data structure to the change state function.

import {useState} from 'react'

export default function Score(){

    const [scores, setScores] = useState({p1: 0, p2: 0})

    const increaseP1 = () => {
        setScores(oldObject => { return {...oldObject, p1: oldObject.p1 +1} })
    }

    const increaseP2 = () => {
        setScores(oldObject => { return {...oldObject, p2: oldObject.p2 +1} })
    }

    return (
        <>
        <p>Player one scores: {scores.p1}</p>
        <p>Player two scores: {scores.p2}</p>

        <button onClick={increaseP1}>Increase player one score</button>
        <button onClick={increaseP2}>Increase player one score</button>
        </>
    );
}

// setScores(oldObject => { return {...oldObject, p2: oldObject.p2 +1} })
// we returned a new object by spreading the old one and then updated p2

import { v4 as uuid } from 'uuid';
import {useState} from 'react'

export default function Emojis(){

    const [emojis, setEmojis] = useState([{id: uuid(), emoji: '😊'}]);

    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: '😁'}])
    }

    return (
        <>
        <div>
            {emojis.map((e) => (
                <span key={e.id}>{e.emoji}</span>
            ))}
        </div>

        <button onClick={addEmoji}>Add a emoji</button>
        </>
    );
}

// deleting from arrays:
import { v4 as uuid } from 'uuid';
import {useState} from 'react'

export default function Emojis(){

    const [emojis, setEmojis] = useState([{id: uuid(), emoji: '😊'}]);

    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: '😁'}])
    }

    const deleteEmoji = (id) => {
        setEmojis((oldEmojis) => { return oldEmojis.filter((e) => e.id !== id);});
      };

    return (
        <>
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id}>{e.emoji}</span>
            ))}
        </div>

        <button onClick={addEmoji}>Add a emoji</button>
        </>
    );
}