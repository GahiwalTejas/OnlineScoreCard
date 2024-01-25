import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import teamSlice from './teamSlice';

const store = configureStore({
    reducer: {
        auth  : authSlice,
        team : teamSlice,
        //TODO: add more slices here for posts
    }
});


export default store;