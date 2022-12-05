import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './data-slice';
import commentSlice from './comment-slice';
import authSlice from "./auth-slice";

const store = configureStore({
    reducer : {dataArray : dataSlice.reducer,  com : commentSlice.reducer , auth : authSlice.reducer}
});
export default store;