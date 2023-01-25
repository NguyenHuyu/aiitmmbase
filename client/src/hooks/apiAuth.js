import axios from "axios"
import storage from "redux-persist/lib/storage"
import { loginFai, loginStart, loginSuccess, logoutFail, logoutStart, logoutSucces } from "../redux/authSlice"

export const loginUser = async(user, dispatch, navigate) =>{
    dispatch(loginStart())
    try {
        const res = await axios.post("http://localhost:5000/api/auth/login", user)
        dispatch(loginSuccess(res.data))
        navigate("/admin")
    } catch (error) {
        dispatch(loginFai())
    }
}

export const logoutUser = async(dispatch, navigate)=>{
    dispatch(logoutStart())
    try {
        storage.removeItem('persist:root')
        storage.removeItem('user')
        dispatch(logoutSucces())
        navigate("/")
    } catch (error) {
        dispatch(logoutFail())
    }
}