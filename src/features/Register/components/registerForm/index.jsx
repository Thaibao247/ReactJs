import React from 'react';
import {useState} from 'react';
import './styles.scss'
function RegisterForm(props) {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        
        <div className='formInput'>
            <label htmlFor="">{label}</label> 
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />     
            <span>{errorMessage}</span>     
        </div>
    );
}

export default RegisterForm;