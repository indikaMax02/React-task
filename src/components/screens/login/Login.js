import MainHeader from "../../MainHeader/MainHeader";
import classes from "./Login.module.css";
import Card from "../../UI/Card/Card";
import { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useSelector,useDispatch} from 'react-redux'
import { authActions } from "../../../store/auth-slice";
import { dataActions } from "../../../store/data-slice";
import {Routes, Route, useNavigate} from 'react-router-dom';
import React,{useEffect} from "react";
import postService from "../../../services/postService";

function Login() {


    const dispatch = useDispatch();
    const tempData = useSelector((state) => state.dataArray.tempData);

    async function fetchMyAPI() {
        const response = await postService.getPost();
        if (response.status === 200) {
            dispatch(dataActions.setData(response.data));
          dispatch(dataActions.setTempData(response.data.slice(0,10)));
        }
      }
  
    


    const navigate=useNavigate();
    const users=useSelector((state)=> state.auth.users);

    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[emailIsValid,setEmailValid]=useState(null);
    const[passwordIsValid,setPasswordValid]=useState(null);

    const [formIsValid,setFormValid]=useState(false);

  

    const emailChangeHandler=(event)=>{
        setEmail(event.target.value);
        if(event.target.value.includes("@")) {
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value);
        if(event.target.value.length>6) {
            setPasswordValid(true);
        }else {
            setPasswordValid(false);
        }
    }

    const submitOnHandler=()=>{
        let userExists=false;
             users.map((item)=>{
                  if(item.email===email && item.password===password){
                      userExists=true;
                      dispatch(authActions.setToken({
                           id : item.id,
                           name : item.name,
                           email : item.email,
                      }));
                         return;
                  }

          });
        if(userExists){
             
             fetchMyAPI();


            navigate('/home');
        }else{
            alert("Email Or Password Invalid");
        }
    }

    useEffect(()=>{
        if(emailIsValid==null && passwordIsValid==null){
            setFormValid(false);
        }
        setFormValid(false);
         if(emailIsValid && passwordIsValid){
             setFormValid(true)
         }else {
             setFormValid(false);
         }
    },[email,password])


  return (
    <Fragment>
      <MainHeader />
     <div className={classes.formContainer}>
        <Card className={classes.card}>
          <h1>Login In</h1>
          <TextField
            className={classes.textField}
            error={emailIsValid == null ? false : !emailIsValid ? true : false}
            color={emailIsValid && "success"}
            id="filled-error-helper-text"
            label="Email"
            value={email}
            // defaultValue="Hello World"
            helperText={
              emailIsValid == null
                ? ""
                : !emailIsValid
                ? "invalid Email pleace enter correct email type"
                : ""
            }
            variant="filled"
            onChange={emailChangeHandler}
          />
          <TextField
            className={classes.textField}
            error={
              passwordIsValid === null ? false : !passwordIsValid ? true : false
            }
            color={passwordIsValid && "success"}
            id="filled-error-helper-text"
            value={password}
            label="password"
            // defaultValue="Hello World"
            helperText={
              passwordIsValid === null
                ? ""
                : !passwordIsValid
                ? "incoorect"
                : ""
            }
            variant="filled"
            onChange={passwordChangeHandler}
          />
         
          <Button
            disabled={!formIsValid}
            onClick={submitOnHandler}
            variant="contained"
          >
            Login
          </Button>

          <span>
            I dont't have account Let's <a href="/">Sign up</a>
          </span>
        </Card>
        </div>

      </Fragment>
   
  );
}
export default Login;
