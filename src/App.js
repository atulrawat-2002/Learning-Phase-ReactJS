import React from "react";
import Body from './Components/Body'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import About from "./Components/About";
import Contact from './Components/Contact'
import AppLayout from './AppLayout'
import NotFound from './Components/NotFound'
import RestaurantMenu from './Components/RestaurantMenu'

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<AppLayout />} >
                <Route index element={<Body />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return (
      <RouterProvider router={router} /> 
    )
}



export default App;