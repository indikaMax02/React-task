import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Select.module.css";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";

function Select() {
  const pageLimit = useSelector((state) => state.dataArray.pageLimit);
  const pageNumber = useSelector((state) => state.dataArray.pageNumber);
  const data = useSelector((state) => state.dataArray.data);
  const limiter = useSelector((state) => state.dataArray.limiter);
  const dispatch = useDispatch();
  const [nextIsDisable, setNextDisable] = useState(false);
  const [prevIsDisable, setPrevDisable] = useState(false);

  useEffect(() => {
    if (pageLimit ===pageNumber) {
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
    const tempArray = data.slice(limiter, limiter + 10);
    dispatch(dataActions.setLimiter(limiter + 10));
    dispatch(dataActions.setTempData(tempArray));
    dispatch(dataActions.incrementPageNum());
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  const prevButtonOnHandler = () => {
    const tempArray = data.slice(limiter - 20, limiter - 10);
    console.log(tempArray);
    dispatch(dataActions.setLimiter(limiter - 10));
    dispatch(dataActions.setTempData(tempArray));
    dispatch(dataActions.decrementPageNum());
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
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
