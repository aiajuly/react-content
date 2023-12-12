// react needs a unique id( key) for every item in a list to keep track of it

export default function LoopThroughNumbers(){

    const fruits = [
        {id: 1, name: 'apple', qty: 4},
        {id: 2, name: 'banana', qty: 6},
        {id: 3, name: 'grapes', qty: 1}
    ]
    
    return (
        <ul>
    
        {fruits.map((f) => ( <li key={f.id}>{f.name}</li> ))}
    
        </ul>
    );
};