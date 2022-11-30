import  Button  from "../../UI/Button/Button";
import { Fragment } from "react";
import MainHeader from '../../MainHeader/MainHeader';
import classes from './SignUp.module.css';
import Card  from "../../UI/Card/Card";
const SignUp = () => {
  return (
  <Fragment>
      
      <div className={classes.fromContainer}>
         <MainHeader/> 
         <Card className={classes.card}>
              <label htmlFor="email">email</label>
              <input id="email"></input>

              <label htmlFor="password">password</label>
              <input id="password"></input>

              <label htmlFor="re-password">Re Enter password</label>
              <input id="re-password"></input>

              <Button><span>Sign up Here</span></Button>
              
         </Card>
           
        </div>           
</Fragment>
         
         );
};
export default SignUp;
