import React from "react"
import Vector from "./assets/download (9).jpeg";   //Vector ---> VARIABLE NAME

// const Card1 = () => {
//   return (
//     <div className='p-2 m-2 text-center bg-slate-400 shadow-xl rounded-lg'>
//         <h1 className='text-2xl text-center'>Card1 Heading</h1>  
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis!</p>
//     </div>
//   )
// }

const Card1 = (props) => {
    console.log(props);
    return (
      <div className={`p-10 m-2 text-center ${props.classname} shadow-xl rounded-lg`}>
        {/* <div className={`p-10 m-2 text-center ${props.className} shadow-xl rounded-lg[300px]`}> */}
        {/* <img src="" alt=""/> */}
        <img src={props.image} alt="" className="w-48"/>
        {/* <img src={props.image} alt="" className="w-[30px]"/> */}
          <h1 className='text-2xl'>{props.heading}</h1>  
          <p>{props.description}</p>
      </div>
    )
  }



  // CAN ALSO BE USED AS BELOW AS USING PROPERTIES NAME INSTEAD OF PROPS
  // const Card1 = (heading , description , classname , image) => {
   
  //   return (
  //     <div className={`p-10 m-2 text-center ${classname} shadow-xl rounded-lg`}>
  //       {/* <div className={`p-10 m-2 text-center ${props.className} shadow-xl rounded-lg[300px]`}> */}
  //       {/* <img src="" alt=""/> */}
  //       <img src={image} alt="" className="w-48"/>
  //       {/* <img src={props.image} alt="" className="w-[30px]"/> */}
  //         <h1 className='text-2xl'>{heading}</h1>  
  //         <p>{description}</p>
  //     </div>
  //   )
  // }


export default Card1