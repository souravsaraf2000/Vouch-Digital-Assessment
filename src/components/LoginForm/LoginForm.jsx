import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Button, Checkbox, Input } from 'antd';
import axios from 'axios';

function LoginForm(props) {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleChange = (e,type) => {
        if(type==="email")
        {
            setemail(e.target.value)
        }
        if(type==="pwd")
        {
            setpassword(e.target.value)
        }
    }
    const handleLogin = async () => {
        const data = {
            "email" : email,
            "password" : password
        }
        await axios.post("https://reqres.in/api/login",data)
        .then((res)=>props.success())
        .catch((err)=>props.fail(err.response.data.error))
    }
    return ( 
        <div className={styles.container}>
            <div className={styles.headers}>
                <h1>Welcome Back</h1>
                <p>Happy to see you again</p>
            </div>
            <div>
                <Input placeholder='Email Address *' className={styles.input} size="large" onChange={(e)=>handleChange(e,"email")} required/>
                <Input placeholder='Password *' className={styles.input} size="large" onChange={(e)=>handleChange(e,"pwd")} required/>
                <Button type="primary" block size="large" style={{
                    backgroundColor: 'rgb(2,48,71)'
                }} className={styles.left} onClick={()=>handleLogin()}><span>Login</span></Button>
                <div className={styles.rem}>
                    <Checkbox className={styles.check}><p>Remember Password</p></Checkbox>
                    <p>Forgot Password ?</p>
                </div>
            </div>
        </div>
     );
}

export default LoginForm;