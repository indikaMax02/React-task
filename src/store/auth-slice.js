import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        users: [{
            id: 1,
            name : "indika",
            email: 'indikamax02@gmail.com',
            password: '1234567',
            
        },
            {
                id: 2,
                name : "kamal",
                email: 'kamal@gmail.com',
                password: '7895123',
            }
        ],
        tokenOb : null,
    },
    reducers: {

        setUser(state,action){
            state.users.push(action.payload);
        },
        setComments(state, action) {
        },
        setToken(state,action){
              state.tokenOb=action.payload;
        }

    }

});

export const authActions = authSlice.actions;
export default authSlice;
