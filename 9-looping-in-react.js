// we use map method alot in react to loop through arrays



export default function LoopThroughNumbers(){

    const fruits = [
        {id: 1, name: 'apple', qty: 4},
        {id: 2, name: 'banana', qty: 6},
        {id: 3, name: 'grapes', qty: 1}
    ]

    return (
        <ul>

        {fruits.map((f) => ( <li>{f.name}</li> ))}

        </ul>
    );
};