import MainHeader from "../../MainHeader/MainHeader";
import classes from './Login.module.css'
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import TextField from "../../UI/TextField/TextField";
import { useState } from "react";


function Login(){
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[emailIsValid,setEmailValid]=useState();
    const[passwordIsValid,setPasswordValid]=useState();

    const emailChangeHandler=(event)=>{
        if(event.target.value.include("@")){
            console.log("true");
        }
    }

    const passwordChangeHandler=(event)=>{

    }


   return(
       <div>
           <MainHeader/>
    <div className={classes.main}>

        <Card className={classes.formContainer}>
            <h1>Login In</h1>
            <TextField onChange={emailChangeHandler} type="text" className={classes.text} label=" Email" error="thi is errirjmjhmhjmhjm"/>
            <TextField onChange={passwordChangeHandler} type="password" className={classes.text} label=" Password" error="Thi is error calling thi funtion"/>
            <Button className={classes.button}>Login</Button>

            <span>I dont't have account Let's <a href="/">Sign up</a></span>
        </Card>



    </div>

       </div>






   )
}
export  default Login