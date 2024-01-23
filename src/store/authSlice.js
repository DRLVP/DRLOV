import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = { 
    status:false,
    data:null
};


// create authslice
const authslice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state, action)=>{
            state.status = true;
            state.data = action.payload; // user object will be passed as payload when dispatching
        },
        logout:(state,action)=>{
            state.status= false;
            state.data = null;
        }
    }
});


export const {login, logout} = authslice.actions;
export default authslice.reducer;