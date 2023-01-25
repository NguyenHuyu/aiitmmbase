import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "user",
    initialState:{
        login:{
            currentUser:null,
            isLoading: false,
            error:false
        },
        logout:{
            isLoading:false,
            error:false
        }
    },
    reducers:{
        loginStart: (state) =>{
            state.login.isLoading = true
        },
        loginSuccess: (state, action) =>{
            state.login.isLoading = false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFail: (state) =>{
            state.login.isLoading = false
            state.login.error = true
        },
        logoutStart: (state) =>{
            state.login.isLoading = true
        },
        logoutSuccess: (state, action) =>{
            state.logout.isLoading = false
            state.login.currentUser = null
            state.logout.error = false
        },
        logoutFail: (state) =>{
            state.logout.isLoading = true
            state.logout.error = true
        },
    }
})


export const { loginStart, loginSuccess, loginFai, logoutStart,logoutSucces,logoutFail } = authSlice.actions
export default authSlice.reducer