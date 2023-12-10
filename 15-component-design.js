// in react we can not pass the state upword( data flows down not up) so we can pass state down as props
// state design principle: list state as high as needed - but no higher


// there are two types of components:
//1- presentational: doesn't have any state, only about UI
//2- logical: has state or related logic



// we can pass functions as props( Woooow :|)


// we can pass a function as a prop, this function can change the state
// pass a function down from the parent to the child and in the child execute it to impact the parent
// image a button component with a onClick: when you render it pass a propFunc that change the state and use that function for the onClick={propFunc}
// how data flows?
// a parent component defines a function
// the function is passed as a prop to a child component
// the child component invokes the prop function
// the parent function is called, usually setting a new state
// the parent component is re-rendered along with its children 
