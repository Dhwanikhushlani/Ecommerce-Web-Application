// import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
// import * as Yup from "yup";
import { z } from 'zod';
import { setError,setLoading,setSuccess, signup, signupUser } from '../redux/slices/authSlice';
import { useDispatch } from 'react-hook-form';

const Signup = () => {

    // TODO--> REGISTER TO USE WITH INPUT TO RETURN VALUE OF GIVEN DATA:--> IT INPUTS DATA OR INSERT PASSED DATA 
    // TODO -->IN OBJECT AND READ IT USING HANDLESUBMIT WHEN ONCHNAGED FROM THAT OBJECT.

    // todo---> HANDLESUBMIT USED TO CHECK OR VALIDATE DATA (BY ADDING VALIDATION IN FUNCTION ON IT):


    //? USING RECT-HOOK-FROM LIBRARY TO ACCESS VALUE OF FORM WITHOUT
    //? USING ONCHANGE VIA REGISTER AS IT RETURNS GIVEN VALUE


    // ! INSTALL NPM I  YUP @HOOKFORM/RESOLVERS ----> IT IS USED IN REACT AS VALIDATOR TO VALIDATE DATA
    // ! HERE YUP CREATES SCHEMA WHILE RESOLVER RESOLVES OR VALIDATE DATA .


    // ?REGEX IS USED TO VALIDATE DATA AS SHOWN BELOW :


    // todo--> IT IS COMPLEX PROCESS SO USED ZOD INTEAD
    // const validationSchema = Yup.object().shape({
    //     name : Yup.string().required("Name is required"),
    //     email : Yup.string().required("Invalid Email").required("Email is required"),
    //     password : Yup.string().min(8, "Password must be of 8 characters")
    //     .regex(/[a-z]/,"Password must contain alteast 1 lower case letter")
    //     .regex(/[A-Z]/,"Password must contain alteast 1 upper case letter")
    //     .regex(/[0-9]/,"Password must contain alteast 1 lnumber")
    //     .regex(/[\w_]/,"Password must contain alteast 1 special character"),
    //     phoneNumber : Yup.string().required("Phone number is required")
    // })


    const validationSchema = z.object({
        name : z.string().min(1,"Name is required").max(40,"Name cannot exceed 40 characters"),
        email : z.string().min(1,"Email is required").email("Invalid Email"),
        password : z.string().min(8, "Password must be of 8 characters")
        .regex(/[a-z]/,"Password must contain alteast 1 lower case letter")
        .regex(/[A-Z]/,"Password must contain alteast 1 upper case letter")
        .regex(/[0-9]/,"Password must contain alteast 1 lnumber")
        .regex(/[\w_]/,"Password must contain alteast 1 special character"),
        phoneNumber : z.string().min(10,"Phone number is required")
    });
            
    // * FORMSTATE IS AN OBJECT CONTAINING ELEMENTS AS ERROR ------> ITS IS CALLED DESTRUCTURING AS E.G :
    // * LET OBJ = {
    // *   FIRSTNAME :
    // *    LASTNAME :
    //  *   SKILLS :{

    //   *  }
    // *}
    // *CONST { FIRSTNAME , LASTNAME , SKILLS : {}} = OBJ;


    // const { register , handleSubmit ,formState : {errors} } = useForm()({
    //     resolver : yupResolver(validationSchema)
    // });

    const dispatch = useDispatch();

    // const { idLoading , error }

    const { register , handleSubmit ,formState : {errors} } = useForm({
        resolver : zodResolver(validationSchema)
    });

    const onSubmit = async(data)=>{
        // console.log(data);
        // dispatch(setLoading());
        // try{
        //     const response = await axios.post("http://localhost:5000/auth/signup",data);
        //     dispatch(setSuccess(response.data.data));
        // }catch(error){
        //     dispatch(setError(error));
        // }


        // dispatch(signupUser(data));
        dispatch(signup(data));
    }
    useEffect(()=>{
        alert.message("user already exists")
    })
  return (
    <div className='flex w-[90%] h-4/5 justify-center items-center bg-sky-200 shadow-2xl'>
        <div className='p-10'>
            <img src="https://th.bing.com/th/id/OIP.oiGZChbKgg-vXPPbsrd5QQHaFN?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className='w-1/2 h-full flex flex-col justify-evenly' >
        <h1 className='text-3xl font-semibold text-center h-1/3 flex items-center justify-center'>Welcome!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-2 gap-8'>
            <div>
                <label className='text-gray-500 font-medium'>Name</label>
                {/* <input type="text" className= 'block p-2 border border-gray-700 outline-none w-3/5 my-2 ' */}
                <input type="text" className= { `block p-2 border border-gray-700 outline-none w-3/5 my-2 ${errors.name ? 'border-red-500 ': 
                    'border-gray-700'}`}  {...register("name")}/>   
                {errors.name && (
                    <p className='text-xs text-red-500'>{errors.name.message}</p>
                )}      
            </div>
            <div>
                <label className='text-gray-500 font-medium'>Email</label>
                <input type="text" className= { `block p-2 border border-gray-700 outline-none w-3/5 my-2 ${errors.email ? 'border-red-500 ': 
                'border-gray-700'}`} {...register("email")}/>
                {errors.email && (
                    <p  className='text-xs text-red-500'>{errors.email.message}</p>
                )}  
            </div>
            <div>
                <label className='text-gray-500 font-medium'>Password</label>
                <input type="text" className= { `block p-2 border border-gray-700 outline-none w-3/5 my-2 ${errors.password ? 'border-red-500 ': 
                    'border-gray-700'}`}
                {...register("password")}/>
                {errors.password && (
                    <p  className='text-xs text-red-500'>{errors.password.message}</p>
                )}  
            </div>
            <div>
                <label className='text-gray-500 font-medium'>Phone Number</label>
                <input type="text" className= { `block p-2 border border-gray-700 outline-none w-3/5 my-2 ${errors.phoneNumber ? 'border-red-500 ': 
                    'border-gray-700'}`}
                {...register("phoneNumber")}/>
                {errors.phoneNumber && (
                    <p  className='text-xs text-red-500'>{errors.phoneNumber.message}</p>
                )}  
            </div>
            </div>
            <button className='p-2 w-[90%] my-4 font-medium text-gray-600 shadow bg-blue-500 active:bg-blue-700'>SignUp</button>
        </form>
        </div>
    </div>
  )
}

export default Signup