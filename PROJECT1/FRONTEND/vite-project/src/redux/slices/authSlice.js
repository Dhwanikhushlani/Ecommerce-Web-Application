import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";
import axios from "axios";

export const signup = createAsyncThunk(
    'auth/signup',
    async(data , rejectWithValues)=>{
        try{
            const response = await axios.post("http://localhost:5000/auth/signup",data);
            return response;
        }catch(error){
            return rejectWithValues(error);
        }
    }
)

export const login = createAsyncThunk(
    'auth/signup',
    async(data , rejectWithValues)=>{
        try{
            const response = await axios.post("http://localhost:5000/auth/login",data);
            return response;
        }catch(error){
            return rejectWithValues(error);
        }
    }
)

const initialState = {
    isLoading : false,
    error : null,
    user : null
}

// * USING THESE REDUCERS IN SIGNUP PAGE IN ONSUB FUNCTION
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setLoading : (state)=>{
            state.isLoading = true,
            state.user = null,
            state.error = null
        },
        setSuccess : (state,action)=>{
            state.isLoading = false,
            state.user = action.payload,
            state.error = null
        },
        setError : (state,action)=>{
            state.isLoading = false,
            state.error = action.payload
        }
    },

    // * ASYNC FUNCTION CANNOT STAY IN SLICES TO USE IT HERE EXTRAREDUCERRS SHOULD BE CREATED TO EXECUTE IT.
    // * AS ASYNC THUNK RETURN RESPONSES STORES IN THESE BUILDER 
    extraReducers : (builder)=>{
        builder
        .addCase(signup.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(signup.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.user = action.payload.data.data,
            state.error = null
        })
        .addCase(signup.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload.response.data
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled , (state,action)=>{
            state.isLoading = false,
            state.user = action.payload.data.data,
            state.error = null
        })
        .addCase(login.rejected , (state , action)=>{
            state.isLoading = false,
            state.error = action.payload.response.data
        })
    }
});

// export const { setLoading , setSuccess , setError } = authSlice.actions;

// * CREATE THUNK OR (SPECIAL FUNCTION) IN SLICES TO CALL API :
// * CUSTOM THUNK

// export const signupUser = (data)=>{
//     return async (dispatch)=>{
//         dispatch(setLoading());
//         try{
//             const response = await axios("http://localhost:5000/auth/signup",data);
//             dispatch(setSuccess(response.data.data));
//         }catch(error){
//             dispatch(setError(error));
//         }
//     }
// }

export default authSlice.reducer;