import MainHeader from "../../MainHeader/MainHeader";
import classes from './SignUp.module.css'
import Card from "../../UI/Card/Card";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Fragment, useEffect, useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import {authActions} from "../../../store/auth-slice";
import {Routes, Route, useNavigate} from 'react-router-dom';


function SignUp(){
    const navigate = useNavigate();

    const users=useSelector((state)=> state.auth.users);
    const[name,setName]=useState('')
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [rePassword,setRePassword]=useState();

    const[nameIsValid,setNameValid]=useState(null);
    const[emailIsValid,setEmailValid]=useState(null);
    const[passwordIsValid,setPasswordValid]=useState(null);
    const [rePasswordIsValid,setRePasswordValid]=useState(null);

    const [formIsValid,setFormValid]=useState(false);

    const [emailError, setEmailError]=useState('error');
    const dispatch=useDispatch();

    const nameRegex=/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    const emailRegex=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    const nameChangeHandler=(event)=>{
        setName(event.target.value);
        if(nameRegex.test(event.target.value)) {
            setNameValid(true);
        }else{
            setNameValid(false);
        }
        
    }

    const emailChangeHandler=(event)=>{
        setEmail(event.target.value);
        if(emailRegex.test(event.target.value)) {
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value);
        if(passwordRegex.test(event.target.value)) {
            setPasswordValid(true);
        }else {
            setPasswordValid(false);
        }
    }

    const rePasswordChangeHandler=(event)=>{
          setRePassword(event.target.value);
          if(event.target.value===password){
              setRePasswordValid(true);
          }else {
              setRePasswordValid(false);
          }
    }

    const submitOnHandler=()=>{
        let userExists=false;
             users.map((item)=>{
                  if(item.email===email && item.password===password){
                      userExists=true;
                         return;
                  }

          });
        if(!userExists){
            dispatch(authActions.setUser({id:3, name:name,email:email,password:password}));
            navigate('/login');
        }else{
            alert(" Email is Exists");
        }
    }



    useEffect(()=>{
        if(emailIsValid==null && passwordIsValid==null){
            setFormValid(false);
        }
        setFormValid(false);
         if(emailIsValid && passwordIsValid && rePasswordIsValid){
             setFormValid(true)
         }else {
             setFormValid(false);
         }
    },[email,password,rePassword])


   return(
      <Fragment>
          <MainHeader className={classes.mainHeader}/>

          <div className={classes.formContainer}>
              <Card className={classes.card}>
                      <h1>Sign Up</h1>
                      <TextField
                          className={classes.textField}
                         error={nameIsValid==null ? false : !nameIsValid ? true : false }
                         color={nameIsValid && "success"}
                          id="filled-error-helper-text"
                          label="Name"
                          value={name}
                          // defaultValue="Hello World"
                          helperText={nameIsValid==null ? "" : !nameIsValid ? "invalid name type your name please" : ""}
                          variant="filled"
                          onChange={nameChangeHandler}
                      />
                      <TextField
                          className={classes.textField}
                         error={emailIsValid==null ? false : !emailIsValid ? true : false }
                         color={emailIsValid && "success"}
                          id="filled-error-helper-text"
                          label="Email"
                          value={email}
                          // defaultValue="Hello World"
                          helperText={emailIsValid==null ? "" : !emailIsValid ? "invalid Email please enter correct email type (ex : kamal@gmail.com)" : ""}
                          variant="filled"
                          onChange={emailChangeHandler}
                      />
                      <TextField
                          className={classes.textField}
                          error={passwordIsValid===null ? false : !passwordIsValid ? true : false }
                          color={passwordIsValid && "success"}
                          id="filled-error-helper-text"
                          value={password}
                          label="password"
                         // defaultValue="Hello World"
                          helperText={passwordIsValid===null ? "" : !passwordIsValid ? "Use lower case, upper case, and number symbols." : ""}
                          variant="filled"
                          onChange={passwordChangeHandler}
                      />
                      <TextField
                          className={classes.textField}
                          error={rePasswordIsValid===null ? false : rePasswordIsValid ? false : true}
                          id="filled-error-helper-text"
                          color={rePasswordIsValid && "success"}
                          label="Re enter password"
                         // defaultValue="Hello World"
                          helperText=""
                          variant="filled"
                          onChange={rePasswordChangeHandler}
                      />
                      <Button disabled={!formIsValid}  onClick={submitOnHandler} variant="contained">Sign Up</Button>
                


              </Card>
          </div>



         </Fragment>
      
   );
}
export default SignUp
