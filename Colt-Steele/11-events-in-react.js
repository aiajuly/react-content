// every element can have an onClick attribute which accepts an event handler that runs when we click the element
const clickHandler = function(){
    console.log("Clicked me...")
};

export default function ClickMe(){

    return (
        <>
        <h3>Click the button:</h3>
        <button onClick={clickHandler}>Click Me...</button>
        </>
    );
};



// we can ttarget different events using the same way... just change the attribute name to the corresponding event name
const hoverHandler = function(){
    console.log("You hovered over me...")
};

export default function HoverOverMe(){

    return (
        <>
        <h3 onMouseOver={hoverHandler} >Hover Over Me...</h3>
        </>
    );
};



// your event handler will be given an object that represents the eventObject
const keyHandler = function(eventObject){
    console.log(eventObject.key)
}

export default function PressAKey(){

    return (
        <input type="text" onKeyDown={keyHandler} />
    );
}