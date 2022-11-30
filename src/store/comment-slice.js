import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "com",
  initialState: {
    comments: [],
    tempData: [],
    length: 0,
    pageNumber: 1,
    pageLimit: 0,
    limiter: 2,
    sp1: 0,
    sp2: 2,
  },
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
      state.length = action.payload.length;
      state.pageLimit = Math.round(action.payload.length / 2);
    },
    incrementLimitation(state, action) {
      state.tempData = state.comments.slice(state.sp1, state.sp2);
      state.sp1 = state.sp1 + 2;
      state.sp2 = state.sp2 + 2;
      if (state.pageNumber === state.pageLimit) {
        alert("ok unaa");
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
      state.tempData = null;
      state.tempData = action.payload;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
