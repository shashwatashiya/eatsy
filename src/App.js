import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


const AppLayout = () => {

    return (
    
    
        <div className = "app">
        <Header/>
        <Outlet/> {/** outlet will be filled by a children based on the path */}
        
    
        </div>
    )
    
    }




const appRouter = createBrowserRouter([

{
    path: "/",
    element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <Body/>
        },
        {
            path: "/about",
            element: <About />
        },
        
        {
            path: "/contact-us",
            element: <Contact/>
        
        },

        {
            path: "/restaurants/:resID" ,//this means resID is dynamic
            element: <RestaurantMenu/>
        }
        
    ],
    errorElement: <Error/> //if this path got an error show this
}


])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

    
