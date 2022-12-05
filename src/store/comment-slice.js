import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "com",
  initialState: {
    comments: [],
    tempData: [],
    length: 0,
    newId: 0,
    pageNumber: 1,
    pageLimit: 1,
    limiter: 2,
    sp1: 2,
    sp2: 4,
  },
  reducers: {
    setNewId(state, action) {
      state.newId = action.payload;
    },

    pushComment(state, action) {
      state.comments.push(action.payload);
    },

    setComments(state, action) {
      // state.comments.push(action.payload);
      state.comments = action.payload;
      // if(action.payload.length===0){
      //   state.pageLimit = 1;
      // }else{
      state.length = action.payload.length;
      state.pageLimit = Math.round(action.payload.length / 2);
    },
    resetCommentStates(state) {
      state.comments = [];
      state.tempData=[];
      state.length = 0;
      state.sp1=2;
      state.sp2=4;
    },
    incrementLimitation(state, action) {
       alert("increment")
       if(state.sp1===0){
        state.sp1 = state.sp1 + 2;
        state.sp2 = state.sp2 + 2;
       }
      state.tempData = state.comments.slice(state.sp1, state.sp2);
      state.sp1 = state.sp1 + 2;
      state.sp2 = state.sp2 + 2;

      if (state.pageNumber === state.pageLimit) {
        state.sp1 = state.sp1 - 2;
        state.sp2 = state.sp2 - 2;
      }
    },

    decrementLimitation(state) {
     
      state.sp1 = state.sp1 - 2;
      state.sp2 = state.sp2 - 2;
      state.tempData = state.comments.slice(state.sp1, state.sp2);
    },

    incrementPageNumber(state) {
      state.pageNumber = state.pageNumber + 1;
    },
    decrementPageNumber(state) {
      state.pageNumber = state.pageNumber - 1;
    },
    setLimiter(state, action) {
      state.limiter = action.payload;
    },
    setTempData(state, action) {
      state.tempData = action.payload;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
