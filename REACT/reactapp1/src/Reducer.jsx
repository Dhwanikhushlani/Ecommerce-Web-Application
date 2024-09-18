import React, { useReducer } from 'react'

// ! REDUCER USED TO MANAGE MULTPLE STATES IN A SINGLE STATE WITHOUT CREATEING TWO OR MORE DIFFERENT STATES 
// !IN A SINGLE STATE

const Reducer = () => {

    function countReducer(state,action){          // todo ---> action --{type : "increment"}
        switch(action.type){
            case "increment" :
                return {...state , count :  state.count +1};
                case "decrement" :
                    return {...state , count :  state.count -1};
                    case "reset" :
                        return {...state , count : 0};
                        case "loading" :
                            return {...state , loading : !state.loading};
                            default :
                            return new Error ("unknown type")
        }
    }

    // const initialState = {count : 0}
    const initialState = {count : 0 ,  loading : true}

    // todo ---> it contains state and function both it gives value of current state 
    // todo ----> reducer accepts function (which consistes of action --> what action we are performing )
                // todo -->and state 
    // todo ---> useReducer is a hook 

    // ? DISPATCH IS A FUNCTION TO CALL ACTIONS 

    const { state , dispatch } = useReducer(countReducer,initialState);
    return(
        <div className='p-24'><p className='text-2xl text-white'>
            {state.count}
            </p>
            <button className='p-2 bg-gray-200' onClick={()=>{dispatch({type  : "increment"})}}>Inc</button>
            <button className='p-2 mx-4  bg-gray-200' onClick={()=>{dispatch({type  : "decrement"})}}>Dec</button>
           </div>
        // todo---> SAME STATE IS MANIPULATING NOT CREATING A NEW STATE
    )
}

export default Reducer