// react needs a unique id( key) for every item in a list to keep track of them

export default function loopThroughNumbers({fruits}){

    return (
        <div>
        <h1>Fruits List</h1>
        <ul>{fruits.map((fruit) => {<li key={fruit.id}>fruit</li>})}</ul>
        </div>
    );
};