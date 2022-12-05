import Card from "../../UI/Card/Card";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import classes from "./PostComment.module.css";
import Button from "@mui/material/Button";

import StartFirebase from "../../../services/firebaseConfig/index";
import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  onValue,
} from "firebase/database";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commentActions } from "../../../store/comment-slice";

function PostComment(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.tokenOb);
  const comments = useSelector((state) => state.com.comments);

  const findOb = useSelector((state) => state.dataArray.findObject);

  const [db, setDb] = useState(StartFirebase);
  const [comment, setComment] = useState("");
  const tempData = useSelector((state) => state.com.tempData);
  const newId = useSelector((state) => state.com.newId);

  
  const commentSubmitHandler = () => {
    
     set(ref(db, "comment/" + newId), {
      userId: token.id,
      ideaId: props.ideaId,
      email: token.email,
      name: token.name,
      comment: comment,
    })
      .then(() => {
        alert(" comment send database and saved");
      })
      .catch((err) => {
        alert("data was an error");
      });

  };

  const commentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  return (
    <Card className={classes.card}>
      <div className={classes.title}>
        <span>Enter your Comment Here</span>
      </div>
      <TextareaAutosize
        onChange={commentChangeHandler}
        value={comment}
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        style={{ width: "100%", maxWidth: "100%", minWidth: "100%" }}
      />
      <Button
        onClick={commentSubmitHandler}
        variant="contained"
        color="warning"
      >
        Publish Your Comment
      </Button>
    </Card>
  );
}
export default PostComment;
