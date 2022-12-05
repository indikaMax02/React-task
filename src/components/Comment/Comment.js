import classes from "./Comment.module.css";
import image from "../../assets/profile.png";
import { useEffect } from "react";

function Comment(props) {

  return (
    <div className={classes.main}>
      <section className={classes.email}>
        <img src={image}></img>
        <span>{props.email}</span>
      </section>

      <section className={classes.commentSection}>
        <h4>{props.title} </h4>
        <p>{props.body}</p>
      </section>
    </div>
  );
}
export default Comment;
