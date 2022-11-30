import { Fragment, useEffect, useState } from 'react';
import MainHeader from '../../MainHeader/MainHeader';
import Card from '../../UI/Card/Card';
import classes from './ViewDetails.module.css';
import Comment from '../../Comment/Comment';
import CommentSelect from '../../select/CommentSelect';
import {useDispatch, useSelector} from 'react-redux'
import postService from '../../../services/postService';
import { commentActions } from '../../../store/comment-slice';

function ViewDetails(props){

   const findOb=useSelector((state)=> state.dataArray.findObject);
   const tempData=useSelector((state)=>state.com.tempData);
   const length = useSelector((state)=>state.com.length);
  
   
   
   const dispatch=useDispatch();
   



   useEffect(()=>{
    async function fetchMyAPI() {
      const response = await postService.getComment(findOb.id);
      if (response.status === 200) {
          dispatch(commentActions.setComments(response.data));
         dispatch(commentActions.incrementLimitation());
      }
    }

    fetchMyAPI();
   },[]);

   return(
     <Fragment>
          <MainHeader />  

          <div className={classes.mainContainer}>
          <div className={classes.stateBar}>
              <span>Idea Id: {findOb.id}</span>
              <span style={{flexGrow:'1'}}>User Id: {findOb.userId}</span>
              <span>Comments : {length}</span>
          </div>
  
          <Card className={classes.body}>
                   <h4 className={classes.title}>{findOb.title}</h4>
                   <p>{findOb.body}</p>
          
          </Card>

          
           {

          tempData.map((item)=>{
                 return  <Comment email={item.email} body={item.body} title={item.name}/>
             })
              
           }
        
            
           <CommentSelect />

          </div>
     </Fragment>
   );
}
export default ViewDetails;