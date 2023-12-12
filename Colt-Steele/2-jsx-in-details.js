// one component in one file
// the file name should be the same as the component

// with react we use import-export rather than module.export-require

// when exporting we use default: export default function somename(){}

// jsx rules:
// 1- with a self closing tag you must explicitly close it with the / like <input type='text'/>
// 2- a component can only return a single top level element
 
// a react fragment is an empty tag <></> which acts like a wrapper

// we can escape jsx by using {} to write pure js inside a component

function Add(){
    return(
        <div>
            sum: {2 + 2}
        </div>
    );
}
