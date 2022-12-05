import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./CommentSelect.module.css";
import { useSelector, useDispatch } from "react-redux";
import { commentActions} from '../../store/comment-slice';

function Select() {
  const pageNumber = useSelector((state) => state.com.pageNumber);
  const pageLimit = useSelector((state)=> state.com.pageLimit);
  const dispatch = useDispatch();
  const [nextIsDisable, setNextDisable] = useState(true);
  const [prevIsDisable, setPrevDisable] = useState(false);
  
 

  useEffect(() => {

  // if(pageLimit===1 && pageNumber===1){
  //   setPrevDisable(true);
  //   setNextDisable(false);
  // }else{
  //     if(pageLimit>1 && pageNumber===1){
  //       setPrevDisable(true);
  //       setNextDisable(false);
  //     }else{
  //       setPrevDisable(false);
  //       setNextDisable(false);
  //     }
  // }

    if (pageLimit === pageNumber) {
      setNextDisable(true);
      setPrevDisable(false);
    } else {
      setPrevDisable(false);
      setNextDisable(false);
    }
    if (1 === pageNumber) {
      setPrevDisable(true);
      setNextDisable(false);
    }
  
  }, [pageNumber]);

 

 

  const nextButtonHandler = () => {
    dispatch(commentActions.incrementPageNumber());
    dispatch(commentActions.incrementLimitation())
   
   
  };

  const prevButtonOnHandler = () => {
   dispatch(commentActions.decrementPageNumber());
   dispatch(commentActions.decrementLimitation());
   
  };

  return (
    <Card className={classes.main}>
      <Button
        className={classes.button}
        onClick={prevButtonOnHandler}
        disabled={prevIsDisable}
      >
        Prev
      </Button>
      <span>
        {pageNumber}/{pageLimit}
      </span>
      <Button
        className={classes.button}
        onClick={nextButtonHandler}
        disabled={nextIsDisable}
      >
        next
      </Button>
    </Card>
  );
}
export default Select;
