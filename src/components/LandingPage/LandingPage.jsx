import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import styles from './LandingaPage.module.css';
import LandingImage from './Landing_Image.png'

function LandingPage(props) {
    return ( 
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <LoginForm success={props.success} fail={props.fail}/>
            </div>
            <div className={styles.imgContainer}>
                <img src={LandingImage} alt="landing"/>
            </div>  
        </div>
     );
}

export default LandingPage;