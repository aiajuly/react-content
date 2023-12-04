// react is a frontend library that helps us to build user interfaces from components

// a component is just a reusable function that combines html and logic

// we can then combine and use these components to create larger apps

// in a react app you will have two folders:
// 1- public folder which will hold our html template file
// 2- src folder which will hold our components

// JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together

// the top level component is usually called app, every other component goes inside it

// let's create our first component
// the function's component must start with an upper case letter

function Greeting() {
    return <h1>Hello</h1>
}

// let's render this component

export default function App() {
    return (
      <div className="App">
        
        <Greeting/>

      </div>
    );
  }
