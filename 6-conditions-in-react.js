// we usually use the ternary opperator all the time in react

export default function ReturnBiggerNumber(){
    const num1 = 3;
    const num2 = 5;
    return(
        <div>
            {num1 > num2 ? <h3>one wins</h3> : null}  
        </div>
    );
}

export default function ReturnBiggerNumber(){
    const num1 = 3;
    const num2 = 5;
    return(
        <div>
            <h3>{num1 > num2 ? 'One wins' : 'Two wins'}</h3>
        </div>
    );
}
