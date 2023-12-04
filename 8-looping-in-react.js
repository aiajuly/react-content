// we use map method alot in react to loop through arrays


export default function loopThroughNumbers({fruits}){

    return (
        <div>
        <h1>Fruits List</h1>
        <ul>{fruits.map((fruit) => {<li>fruit</li>})}</ul>
        </div>
    );
};