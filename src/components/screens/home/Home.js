import { Fragment, useEffect } from "react";
import MainHeader from "../../MainHeader/MainHeader";
import PostItem from "../../postItem/PostItem";
import classes from "./Home.module.css";
import postService from "../../../services/postService";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/data-slice";
import Select from "../../select/Select";
function Home() {
  const dispatch = useDispatch();
  const tempData = useSelector((state) => state.dataArray.tempData);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await postService.getPost();
      if (response.status === 200) {
        dispatch(dataActions.setData(response.data));
        const array = response.data.slice(0, 10);
        dispatch(dataActions.setTempData(array));
      }
    }

  
    fetchMyAPI();
  }, []);

  

  return (
    <Fragment>
      <MainHeader />

      <div className={classes.main}>
        {tempData.map((item, index) => {
          return (
            <PostItem
              key={item.id}
              title={item.title}
              body={item.body}
              ideaId={item.id}
              userId={item.userId}
            />
          );
        })}

        <div className={classes.selectContainer}>
          <Select />
        </div>
      </div>
    </Fragment>
  );
}
export default Home;
