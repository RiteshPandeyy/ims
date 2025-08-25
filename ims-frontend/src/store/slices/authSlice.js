import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    user:null,
    token:null,
    role:null,
    status:null,
    error:null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginSuccess(state,action){
            const {user,token,role}=action.payload;
            state.user =user;
            state.token=token;
            state.role = role??null;
            state.status='succeeded';
            state.error=null;
        },
        logout:()=>({...initialState}),
        setAuthLoading:(s)=>{s.status='loading'},
        setAuthError:(s,a)=>{s.status='failed',s.error=a.payload;},

    }

})

export const {loginSuccess,logout,setAuthLoading,setAuthError} = authSlice.actions;
export default authSlice.reducer;