import Card from '../UI/Card/Card'
import classes from './PostItem.module.css'
import {useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { dataActions } from '../../store/data-slice';


function PostItem(props){

         
          const data = useSelector((state)=>state.dataArray.tempData);
          const dispatch=useDispatch();

const navigate=useNavigate();
   const cardOnClickHandler=()=>{

            

           data.map((item,index)=>{
                  if(item.id===props.ideaId){
                     dispatch(dataActions.setFindedObject(item));
                     return;
                  }
            })
            
        navigate('/viewDetailsPage');
   }

 return(
    <Card className={classes.main}
      onClick={cardOnClickHandler}
    >
        
       <h4>{props.title}</h4>
        <p>{props.body}</p>

        <div className={classes.footer}>
              <span>Idea Id: {props.ideaId}</span>
              <span>User Id: {props.userId}</span>
            
        </div>
          
    </Card>
 );
}
export default PostItem;