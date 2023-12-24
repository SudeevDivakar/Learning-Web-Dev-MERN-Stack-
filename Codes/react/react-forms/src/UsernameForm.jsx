import { useState } from "react";

export default function UsernameForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    });
    function handleChange(evt) {
        const fieldName = evt.target.name;
        const value = evt.target.value;
        setFormData((currData) => {
            currData[fieldName] = value;
            return {...currData};
        });
    }
    function handleSubmit(){
        console.log(formData);
    }
    return (
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="First name" 
            value={formData.firstName} onChange={handleChange}
            id='firstName' name='firstName'/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Last name"
             value={formData.lastName} onChange={handleChange}
             id='lastName' name='lastName'/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" 
            value={formData.password} onChange={handleChange}
            id='password' name='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}