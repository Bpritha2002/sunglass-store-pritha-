import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";


const initialState = {
    upload_status : "idle",
    isRegistered: false,
    redirectlogin: null,
    isLoggedIn: false,
    redirectHome: null,
    Profile_Seen: {},
}


//Signup function
export const signup = createAsyncThunk ("/user/signup", async(formData) =>{
    let res = await axiosInstance.post("/user/signup", formData);
    let resData = await res.data;
    return resData;
})

export const signin = createAsyncThunk("/user/signin", async(formData) =>{
    let res = await axiosInstance.post("/user/signin",formData)
    let resData = await res?.data
    return resData 
})

export const profile_details = createAsyncThunk("/user/profile-details", async() =>{
    let res = await axiosInstance.get("/user/profile-details")
    let resData = await res?.data
    return resData 
})

//Slice creation
export const authenticationSlice = createSlice ({
    name: "authentication",
    initialState,
    reducers: {
        handleLoggeduot: (state,{payload}) => {
            localStorage.removeItem("token")
            localStorage.removeItem("Firstname")
            localStorage.removeItem("email")
            state.isLoggedIn = false
        },

        check_token: (state, {payload}) => {
            let token = localStorage.getItem("token")
            if(token !== null && token !== undefined) {
                state.isLoggedIn = true
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(signup.pending,(state,{payload}) => {
            state.upload_status= "Sending data"
            
        }).addCase(signup.fulfilled,(state,{payload})=>{
            state.pending = "idle"
            localStorage?.setItem("first_name",payload?.data.first_name)
            state.isRegistered = true
        }).addCase(signup.rejected,(state,{payload}) =>{
            state.upload_status = "Failed to send data"
        }).addCase(signin.pending,(state,{payload}) =>{
            state.upload_status = " Trying to signin"
        }).addCase(signin.fulfilled,(state,{payload}) =>{
             state.upload_status = "User logged in sucessfully"
             state.isLoggedIn = true
             state.redirectHome = "/"
             localStorage?.setItem("token",payload?.token)
             localStorage?.setItem("Firstname", payload?.data.first_name)
             localStorage?.setItem("email",payload?.data.email)

        }).addCase(signin.rejected,(state,{payload})=>{
            state.upload_status  = "Failed to login"
        })
        .addCase(profile_details.pending,(state,{payload}) => {
            state.upload_status= "Sending data"
            
        }).addCase(profile_details.fulfilled,(state,{payload})=>{
            state.upload_status = "idle"
            state.Profile_Seen = payload.data
           
        }).addCase(profile_details.rejected,(state,{payload}) =>{
            state.upload_status = "Failed to send data"
    })}
})

export const {handleLoggeduot, check_token} = authenticationSlice.actions