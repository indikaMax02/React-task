import { Fragment, useEffect, useState } from "react";
import MainHeader from "../../MainHeader/MainHeader";
import Card from "../../UI/Card/Card";
import classes from "./ViewDetails.module.css";
import Comment from "../../Comment/Comment";
import CommentSelect from "../../select/CommentSelect";
import { useDispatch, useSelector } from "react-redux";
import postService from "../../../services/postService";
import { commentActions } from "../../../store/comment-slice";
import PostComment from "../../Comment/postComment/PostComment";
import { child, get, onValue, ref } from "firebase/database";
import StartFirebase from "../../../services/firebaseConfig";

function ViewDetails(props) {
  const findOb = useSelector((state) => state.dataArray.findObject);
  const tempData = useSelector((state) => state.com.tempData);
  const length = useSelector((state) => state.com.length);
  const comments = useSelector((state) => state.com.comments);

  const [db, setDb] = useState(StartFirebase);

  const dispatch = useDispatch();

  const setData = () => {
    onValue(ref(db, "comment/"), (snapshot) => {
      const data = snapshot.val();
      let ar = [];
      dispatch(commentActions.setNewId(Object.values(data).length));
      Object.values(data).map((item) => {
        if (item.ideaId === findOb.id && item.userId === findOb.userId) {
          ar.push({
            name: item.name,
            email: item.email,
            body: item.comment,
          });
        }
      });

      let tempArray=[];
      for(let i=ar.length-1; i>=0; i--){
               tempArray.push(ar[i]);
      }
      dispatch(commentActions.setComments(tempArray));
      dispatch(commentActions.setTempData(tempArray.slice(0,2)));


      console.log("calling view details udeeffect");
    });
  };

  useEffect(() => {
    setData();

    return () => {
      
      dispatch(commentActions.resetCommentStates());
    
        
    };
  }, []);

  return (
    <Fragment>
      <MainHeader />

      <div className={classes.mainContainer}>
        <div className={classes.stateBar}>
          <span>Idea Id: {findOb.id}</span>
          <span style={{ flexGrow: "1" }}>User Id: {findOb.userId}</span>
          <span>Comments : {length}</span>
        </div>

        <Card className={classes.body}>
          <h4 className={classes.title}>{findOb.title}</h4>
          <p>{findOb.body}</p>
        </Card>

        <div className={classes.commentContainer}>
          <div>
            <h1>Comments</h1>
          </div>
        </div>

        <PostComment ideaId={findOb.id} />

        {tempData.map((item) => {
          return (
            <Comment email={item.email} body={item.body} title={item.name} />
          );
        })}

        <CommentSelect />
      </div>
    </Fragment>
  );
}
export default ViewDetails;
