import React from 'react';
import { useState } from 'react';
import RegisterForm from './components/registerForm';
import './styles.scss'
function Register(props) {

   const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
   })

   const inputs = [
    {
        id:1,
        name: "username",
        type:"text",
        placeholder:"Username",
        errorMessage:"Username phải từ 3-16 ký tự và không được chứa ký tự đặc biệt!",
        label:"Username",
        pattern:"^[A-Za-z0-9]{3,16}$" ,
        required: true
    },
    {
        id:2,
        name: "email",
        type:"email",
        placeholder:"Email",
        errorMessage:"Không đúng định dạng email!",
        label:"Email",
        required: true
    },
    {
        id:3,
        name: "password",
        type:"password",
        placeholder:"Password",
        errorMessage:"Password phải từ 8-16 ký tự",
        label:"Password",
        pattern:"^[A-Za-z0-9]{8,16}$" ,
        required: true
    },
    {
        id:4,
        name: "confimPassword",
        type:"password",
        placeholder:"ConfirmPassword",
        errorMessage:"Password không đúng",
        label:"ConfirmPassword",
        pattern:values.password,
        required: true
    }
   ]

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    console.log('====================================');
    console.log(values);
    console.log('====================================');
    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
                {
                    inputs.map((item) => (
                        <RegisterForm key={item.id} {...item} value={values[item.name]} onChange={onChange} />
                    ))
                }
                <button>Register</button>
            </form>
             
        </div>
    );
}

export default Register;