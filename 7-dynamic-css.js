// every element will have a style attribute which take a js object that contains the styles( these styles will be camelCased: fontSize), using this we can add dynamic content

export default function returnBiggerNumber(){
    const num1 = 3;
    const num2 = 5;
    const styles = {color: num1 > num2 ? 'green' : 'red'}
    return(
        <div>
            <h3 style={styles}>{num1 > num2 ? 'One wins' : 'Two wins'}</h3>
        </div>
    );
}
