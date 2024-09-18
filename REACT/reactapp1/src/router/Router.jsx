import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Parent from '../Parent';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';

// !CREATE BROWSERROUTER USING OBJECTS SECOND WAY TO CREATE IT

const Router = createBrowserRouter([
    {
        element : <Parent />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <Signup />
            }
        ]
    }
])

export default Router