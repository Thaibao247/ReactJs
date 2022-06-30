import React from 'react';
import {useState} from 'react';
import './styles.scss'
function LoginForm(props) {
    const {label,userRef, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        
        <div className='formInput'>
            <label htmlFor="">{label}</label> 
            <input {...inputProps} ref={userRef} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />       
        </div>
    );
}

export default LoginForm;