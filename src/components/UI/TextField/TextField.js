
import {Fragment} from "react";
import classes from './TextField.module.css'
function TextField(props){
    return(

        <Fragment>
            <div className={classes.textFieldContainer}>
                <label ><span>{props.label}</span></label>
                <input onBlur={props.onBlur} value={props.value} style={props.valid ? {borderColor:"green"} : {borderColor:"red"} | props.valid==null &&  {borderColor:"black"}  } onChange={props.onChange} type={props.type} className={props.className}/>
                <label className={classes.errorLabel}><span className={classes.error}>{props.error}</span></label>
            </div>

        </Fragment>


    );
}
export  default TextField