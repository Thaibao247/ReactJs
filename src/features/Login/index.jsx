import React, { useRef } from 'react';
import LoginForm from './components/loginForm';
import { useState } from 'react';
import './styles.scss'
import { useEffect } from 'react';
function Login(props) {

    const [values, setValues] = useState({
        username:"",
        password:""
   });

   const userRef = useRef();
   const errRef = useRef();

   const [errMsg, setErrMsg] = useState('');
   const [success, setSuccess] = useState('');

//    useEffect(() => {
//         userRef.current.focus();
//    },[]);

   useEffect(() => {
        setErrMsg('');
   },[values.username,values.password])

    const inputs = [
        {
            id:1,
            name: "username",
            type:"text",
            placeholder:"Username",
            errorMessage:"",
            label:"Username",
           // pattern:"^[A-Za-z0-9]{3,16}$" ,
            required: true
        },
        {
            id:2,
            name: "password",
            type:"password",
            placeholder:"password",
           // errorMessage:"",
            label:"password",
            required: true
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values.username,values.password);
        setValues({...values},'');
        setSuccess(true);
       
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    return (
        <>
        {success ? (
            <section>
                <h1>Đăng nhập thành công!</h1>
                <br />
                <p>
                    <a href="#">Go to home</a>
                </p>
            </section>
        ) : (
        <div className='login'>
            <form action="" onSubmit={handleSubmit}>
                <p ref={errRef} className={errMsg ? "errmsg" : 
                "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Login</h1>
                {
                    inputs.map((item) => (
                        <LoginForm ref={userRef} key={item.id} {...item} value={values[item.name]} onChange={onChange} />
                    ))
                }
                <button>Submit</button>
                <p>
                    Tạo tài khoản?<br />
                    <span className='line'>

                        <a href="#">Register</a>
                    </span>
                </p>
            </form>
        </div>
        )}
        </>
    );
}

export default Login;