import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './data-slice';
import commentSlice from './comment-slice';

const store = configureStore({
    reducer : {dataArray : dataSlice.reducer,  com : commentSlice.reducer}
});
export default store;