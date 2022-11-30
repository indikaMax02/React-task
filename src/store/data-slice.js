import { createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
      name : 'data',
      initialState : {
          length : 0,
          data : [],
          tempData : [],
          findObject : {},
          pageNumber : 1,
          pageLimit : 0,
          limiter : 10,

      },
      reducers : {

        
        setData(state,action){
             state.data=action.payload;
             state.length=action.payload.length;
             state.pageLimit= (action.payload.length) / 10;
        },

        setTempData(state,action){
             state.tempData=action.payload;
        },

        incrementPageNum(state){
                state.pageNumber=state.pageNumber+1;

        },

        decrementPageNum(state){
                 state.pageNumber=state.pageNumber-1;   
        },

        setStarter(state){
            state.starter=state.starter+1;
        },

        setLimiter(state,action){
          state.limiter=action.payload;
      },

      setFindedObject(state,action){
         state.findObject=action.payload;
      }
         


      }
});

export const dataActions = dataSlice.actions;
export default dataSlice;