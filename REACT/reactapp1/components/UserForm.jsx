import axios from 'axios';
import React, { useState } from 'react'

const UserForm = ({setIsAddUser , fetchData}) => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [contactDetails , setContactDetails] = useState("");

    const handleSubmit = async (e)=>{

        //todo- NPM RUN DEV AND THEN OPEN INSPECT(NETWORK) ONE SIDE AND UI ON OTHER SIDE NOW
        // TODO- FILL THE FORM AND SUBMIT WHEN YOU SUBMIT THER IS REQUEST HIT IN NETWORK WHEN YOU OPEN IT 
        // TODO-YOU SEE "HEADERS" WHERE ALL INFO REGARDING REQUEST IS THERE AND IN "PAYLOAD" YOU SEE DATA YOU HAVE 
        // TODO-FILLED IN THE FORM AND IN RIGHT SECTION OF PAYLOAD THERE IS DATA SENT BY BACKEND.


        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/api/user" ,{
                firstName , lastName , email , contactDetails
            });

            // todo-AFTER FILLING FORM AND SUBMIT IT AUTOMATICALLY SHIFT US TO USERS LIST PAGE
            setIsAddUser(false);

            //TODO- IT AUTOMATICALLY UPDATE USERS DATA LIST AS WHEN WE CLICK ON SUBMIT BUTTON.
            fetchData();
            // console.log(response);
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div>
        <form>
            <div className='grid grid-col gap-5 mx-5'>
                <div>
                    <p className='m-2 text-gray-700'>First Name</p>
                    <input type="text" placeholder='First Name' className='p-2 border
                    border-gray-700 bg-transparent rounded shadow w-3/5' onChange={(e)=>{
                        setFirstName(e.target.value)}}/>
                </div>
                <div>
                    <p className='m-2 text-gray-700'>Last Name</p>
                    <input type="text" placeholder='First Name' className='p-2 border
                    border-gray-700 bg-transparent rounded shadow w-3/5'onChange={(e)=>{
                        setLastName(e.target.value)}}/>
                </div>
                <div>
                    <p className='m-2 text-gray-700'>Email</p>
                    <input type="text" placeholder='First Name' className='p-2 border
                    border-gray-700 bg-transparent rounded shadow w-3/5'onChange={(e)=>{
                        setEmail(e.target.value)}}/>
                 </div>
                 <div>
                    <p className='m-2 text-gray-700'>Contact Details</p>
                    <input type="text" placeholder='First Name' className='p-2 border
                    border-gray-700 bg-transparent rounded shadow w-3/5'onChange={(e)=>{
                        setContactDetails(e.target.value)}}/>
                 </div>
                 <div>
                    <button type='submit' className='p-2 bg-blue-500 text-white font-medium shadow rounded'>
                        Submit</button>
                 </div>
            </div>
        </form>
    </div>
  )
}

export default UserForm