//todo ---> 16 SEPTEMBER 2024
//TODO --> SHOULD BE COPIED IN NODEPROJECT FOLDER CONATINING REACT FOLDER WITH REACT SERVER 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Dashboard />
    </>
  )
}

export default App



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useContext, useEffect, useState } from "react";  
// import Card1 from "./Card1"
// import Card2 from "./Card2"
// import Home from "./Home"
// import productImage1 from "./assets/download (9).jpeg";
// import productImage2 from "./assets/DL.jpeg";
// import productImage3 from "./assets/download (10).jpeg";
// import productImage4 from "./assets/download (11).jpeg";
// //IMPORTED AUTOMATICALLY USING USESTATE BELOW
// import Child from "./Child"
// import Login from "./Login"
// import { CountContext } from "./context/CountProvider";
// import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
// import Navbar from "./Navbar";
// import Signup from "./Signup";
// import Router from "./router/router";
// import Reducer from "./Reducer";
// import Callback from "./Callback";
// import Memo from "./Memo";
// import Ref from "./Ref";

// // import Home from "./Home"


// const data = [
//   {
//     heading : "Card1",
//     description : "Card 1 Description",
//     classname : "bg-green-100",
//     image : productImage1
//   },
//   {
//     heading : "Card2",
//     description : "Card 2 Description",
//     classname : "bg-violet-100",
//     image : productImage2
//   },
//   {
//     heading : "Card3",
//     description : "Card 3 Description",
//     classname : "bg-cyan-100",
//     image : productImage4
//   },
//   {
//     heading : "Card4",
//     description : "Card 4 Description",
//     classname : "bg-blue-100",
//     image : productImage3
//   },
//   {
//     heading : "Card5",
//     description : "Card 5 Description",
//     classname : "bg-yellow-100",
//     image : productImage2
//   },
//   {
//     heading : "Card6",
//     description : "Card 6 Description",
//     classname : "bg-orange-100",
//     image : productImage1
//   },
//   {
//     heading : "Card7",
//     description : "Card 7 Description",
//     classname : "bg-red-100",
//     image : productImage4
//   },
//   {
//     heading : "Card8",
//     description : "Card 8 Description",
//     classname : "bg-pink-100",
//     image : productImage2
//   },
// ]

// function App() {

//   const [count, setCount] = useState(0);
//   const [productId , setProductId] = useState(1);
//   // const [ setCountValue ]=useContext(CountContext);
//   const [apiData, setApiData] = useState([]);
//   const [loading , setLoading] = useState(false);

  // 2 SEPTEMBER 2024


  // const fetchData = async ()=>{
  //   setLoading(true);
  //   try{
  //     const response = await fetch(`https://fakestoreapi.com/products`);
  //       const data = await response.json();
  //       console.log(data);
  //       setApiData(data);
  //       setLoading(false);
  //   }catch(error){
  //     console.log(error)
  //     setLoading(false);
  //   }
  // }


  // useEffect(()=>{
  //     fetchData();

      // console.log(count);
      // setCount(prev=>prev+1)
    // },[])
  // fetchData();

    // if(loading){
    //   return(
    //     <div className="text-3xl text-black flex justify-center items-center w-full h-screen">Loading...
    //     </div>
    //   )
    // }
  
    

  // const fetchData =()=>{
  //   console.log("Hello Techno from fetch data function");
  // }

  // const fetchData = async (id)=>{
  //   try{
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       const data = await response.json();
  //       console.log(data);
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
// ANY FUNCTION SART WITH USE ---> HOOKE IS USED

  // USE EFFECT
    // useEffect(()=>{
      // RENDERS ONLY 
      // fetchData(productId);
      // console.log("first")

      // VALUE BEFORE CHANGE OR INCREMENT STORED IN PREV I.E IN YESTERDAY CODE COUNT = 0 INITIALLY 
      // SO IT IS STORED IN PREV ANDD THEN CHANGE ACCORDINGLY

      // console.log(count);
      // setCount(prev=>prev+1)
    // },[productId])
  // fetchData();



  // return (
  //   <>
  //   {/* HTML CODE ALWAYS WRITTEN IN RETURN BLOCK ONLY NOT OUTSIDE IT */}

  //      {/* <h1>HELLO TECHNO</h1> */}
     
  //    {/* DEFINE THE FILE NAME(COMPONENT) HERE IN WHICH HTML IS RETURNED AS BELOW */}

  //       <Home />
  //   </>
  // )

  // USESTATE ---> 

  // CREATING STATES AS FIRST IS STATENAME SECOND IS SETSTATENAME:
  // const[count , setCount] = useState(0);    //INITIAL VALUE OF COUNT IS = 0

  // let count = 0;
  // console.log(count);

  // return(

  //       // 1 SEPTEMBER 2024

  //       <div className="w-full text-white text-center flex flex-col
  //         // justify-center items-center gap-4">

  //           <button className="border-2 p-2 px-4 border-gray-900 active:bg-pink-600 active:text-green-400" 
  //           onClick={()=>{setProductId(productId+1)}}>+productId</button>
  //           <p className="text-2xl">The value of productId is : {productId}</p> 

  //           <Login /> 
          {/* <Ref /> */}

          {/* <Memo /> */}
          {/* <Callback /> */}
          {/* <Reducer /> */}
    {/* USING */}
      //     <Navbar />

      //     <RouterProvider router={Router} />
  
      //     <Routes>
      //     <Route path="/" element={<Home />}/>
      //       <Route path="/login" element={<Login />}/>
      //       <Route path="/Signup" element={<Signup />}/>
      //     </Routes>

      // {
      //   apiData.map((item,i)=>{
      //   return(
      //   <Card1 heading={item.heading} classname = {item.classname} description = {item.description} image={item.image}/>
      //   )
      //   })
      // }
       

          {/* {
        data.map((item,i)=>{
          return(
            <Card1 heading={item.heading} classname = {item.classname} description = {item.description} image={item.image}/>
          )
        })
      } */}


         
          // </div>
//   )
// }

        // 31 AUGUST 2024
      
          // <div className="w-full h-screen text-center flex flex-col
          // justify-center items-center gap-4">
          //   <p className="text-3xl text-white">App</p>
          //   <button className="p-2 border-2 text-gray-200 active:bg-gray-200 active:text-gray-700 "onClick={()=>{setCountValue((prev)=>prev+1)}}>Update Count Value</button>
          //   {/* <Child count ={count} setCount={setCount}/> */}
          
          
          {/* <button className="border-2 p-2 px-4 border-gray-900 active:bg-pink-600 active:text-green-400" 
            onClick={()=>{setCount(count+1)}}>+ Count</button>
            <p className="text-2xl">The value of count is : {count}</p>
            <button className="border-2 p-2 px-4 border-gray-900 active:bg-pink-600 active:text-green-400" 
            onClick={()=>{setProductId(productId+1)}}>+productId</button>
            <p className="text-2xl">The value of productId is : {productId}</p> 




          {/* <Login /> */}


    {/* // <div className="flex">
      // <div className="flex gap-3 text-center">
      // <div className="grid grid-cols-4 gap-3 text-center">

      // <div className="text-center"> */}
      

      

      {/* <p className="text-4xl font-medium text-white" >The Value of count is : {count}</p> */}
      {/* <button className="bg-slate-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
        count +=1
        console.log(count);
      }}>Inc Count(+)</button>
      <button className="bg-slate-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
        count -=1
        console.log(count);
      }}>Dec Count(-)</button> */}


      {/* OR  */}


      {/* ADDING CHILD IN IT */}
      {/* PARENT TO CHILD DATA TRANSFER */}

      {/* <p className="text-4xl font-medium text-white" >The Value of count is : {count}</p>
      <Child count={count}/>
      <button className="bg-slate-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
        setCount(count+1);
      }}>Inc Count(+)</button>
      <button className="bg-slate-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
        setCount(count-1);
      }}>Dec Count(-)</button> */}

      {/* CHILD TO PARENT DATA TRANSFER */}

      {/* <p className="text-4xl font-medium text-white" >The Value of count is : {count}</p>
        <Child count={count} setCount={setCount}/> */}




      {/* <div className="flex gap-4">
      <Card1 heading = "Card1 Heading" description = "This is card1 description" classname = "bg-pink-200" image={productImage1}/>
      <Card1 heading = "Card2 Heading" description = "This is card2 description" classname = "bg-slate-300" image={productImage2}/>
      <Card1 heading = "Card3 Heading" description = "This is card3 description" classname = "bg-green-50" image={productImage3} />
      <Card1 heading = "Card4 Heading" description = "This is card4 description" classname = "bg-blue-50" image={productImage4} />
      </div> */}
      {/* <p className="text-4xl font-medium text-white" >The Value of count is : {count}</p> */}




      {/* <Card1 /> */}
      {/* PROPS */}
      

      {/* {
        data.map((item,i)=>{
          return(
            <Card1 heading={item.heading} classname = {item.classname} description = {item.description} image={item.image}/>
          )
        })
      } */}

      {/* <Card1 heading = "Card1 Heading" description = "This is card1 description" classname = "bg-pink-200" image={productImage1}/>  */}
      {/* IF CARD 2 IS DLETED YET BE CREATED USING 1 ONLY */}
      {/* <Card1 heading = "Card2 Heading" description = "This is card2 description" classname = "bg-slate-300" image={productImage2}/>
      <Card1 heading = "Card3 Heading" description = "This is card3 description" classname = "bg-green-50" image={productImage3} />
      <Card1 heading = "Card4 Heading" description = "This is card4 description" classname = "bg-blue-50" image={productImage4} /> */}
      {/* <Card2 /> */}


   

// export default App












// GIVEN PART COMMENTED:
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
   


// REACT COMPONENT  ALWAYS USE EXPORT DEFAUL
// export default App

//!-----------------------------------------------------------------------------------------------------------------
//? TASK : CREATE PRODUCT CARDS USING API 

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductList from './ProductList';
// import ProductDetail from './ProductDetail';

// function App() {
//   const [products, setProducts] = useState([]);

//   // Fetch data from the API when the component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Route to list all products */}
//           <Route path="/" element={<ProductList products={products} />} />

//           {/* Route to display product details by ID */}
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// ? -------------------------------------------------------------------------------------------------------------------
