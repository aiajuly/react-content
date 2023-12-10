// every input element will have a state that keeps track of its value

// the value of the input will be set to the state
// the input will have a onChange event and its event handler will update the state
// that change will be reflected on the input because remember that the input value is set to the state value

// to label inputs in jsx we use label with htmlFor property
import { useState } from "react";

export default function Username(){

    const [username, setUsername] = useState('');

    const changeUsername = (evtObj) => {

        setUsername(evtObj.target.value);

    };

    return (

        <form action="">

            <label htmlFor="username">Username</label>
            
            <input 
            type="text"
            id="username"
            value={username}
            onChange={changeUsername}
            />

            <button>Submit</button>

        </form>
    );


};

// computed property names allow you to put an expression in square brackets [], that will be computed and used as the property name.

const propName = 'name';
const obj = {[propName]: 'Ali'}


// when we have more than one input; we use an object to store the different input values
// each input will have a name property that will match the property name in the object
// then we can set a generic event handler that will determine the evtObj.target.name and change the value accordingly

import { useState } from "react";

export default function SignUpForm(){

    const [formData, setFormData] = useState({firstname: '', lastname: '', password: ''});

    const changeFormData = (evtObj) => {

            setFormData({...formData, [evtObj.target.name]: evtObj.target.value})
            // for e.g. evtObj.target.name is password then we will set the password property in the formData to the value the user entered in the input
    };

    const handleSubmitting = () => {

        console.log(formData);

    };


    return (
        <form>

            <label htmlFor="firstname">First Name</label>
        
            <input 
            type="text"
            id="firstname"
            value={formData.firstname}
            onChange={changeFormData} 
            name="firstname"
            />

            <label htmlFor="lastname">Last Name</label>
        
            <input 
            type="text"
            id="lastname"
            value={formData.lastname}
            onChange={changeFormData}
            name="lastname"
            />

            <label htmlFor="password">Password</label>
        
            <input 
            type="password"
            id="password"
            value={formData.password}
            onChange={changeFormData}
            name="password"
            />

            <button onClick={handleSubmitting}>Submit</button>

        </form>
    );
};



