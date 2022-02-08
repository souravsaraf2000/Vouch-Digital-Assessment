import React from 'react';
import styles from './Header.module.css'
import { Button } from 'antd';
import 'antd/dist/antd.css';

function Header() {
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>
                <p>ATools<span>.</span></p>
            </div>
            <div className={styles.btns}>
                <Button type="primary" block size="large" style={{
                    backgroundColor: 'rgb(2,48,71)'
                }} className={styles.left}><span>Start Free Trial</span></Button>
                <Button type="primary" size="large" block style={{
                    backgroundColor: 'rgb(251,133,0)'
                }}><span>Login</span></Button>
            </div>
        </div>
     );
}

export default Header;