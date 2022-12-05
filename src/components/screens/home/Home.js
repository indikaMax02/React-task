import { Fragment, useEffect } from "react";
import MainHeader from "../../MainHeader/MainHeader";
import PostItem from "../../postItem/PostItem";
import classes from "./Home.module.css";
import postService from "../../../services/postService";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store/data-slice";
import Select from "../../select/Select";
import  Card from "../../UI/Card/Card";
import hi from '../../../assets/hi.png';
import user from '../../../assets/user.png';
import { Outlet, Link } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const tempData = useSelector((state) => state.dataArray.tempData);
  const data = useSelector((state)=> state.dataArray.data);
  const token = useSelector((state)=> state.auth.tokenOb);

  useEffect(() => {
        // const array = data.slice(0, 10);
        // dispatch(dataActions.setTempData(array));
       
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }
  ,[]);

  
  //   fetchMyAPI();
  // }, []);

  

  return (
    <Fragment>
      <MainHeader>

       <div className={classes.profile}>
           <img src={user} style={{width:"50px"}}/> 

      

           <span style={{marginLeft : '10px', fontWeight:'bold'}}>{token.name}</span>
           <div class = {classes.vertical}></div>
          
           <Link to="/login">Logout</Link>
       </div>
      </MainHeader>

     
      

      <div className={classes.main}>

      <Card className={classes.card}>
      <h1>Welcome {token.name}
        
        <img src={hi} style={{width:'30px'}}/>

      </h1>
      <span>Find, Publish and Comment on Ideas with IDEA PORTAL</span>

      </Card>

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
