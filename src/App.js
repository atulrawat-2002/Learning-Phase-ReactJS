import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import Body from './Components/Body'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import About from "./Components/About";
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import RestaurantMenu from './Components/RestaurantMenu'
import Header from './Components/Header'
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore'
import Cart from "./Components/Cart";


const Grocery = lazy(() => import('./Components/Grocery'))

const About = lazy(() => import('./Components/About'))


const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Atul Rawat"
        }
        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedIn: userName, setUserName}}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    )
}


const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<AppLayout />} >
                <Route index element={<Body />} />
                <Route path="/about" element={<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>} />
                <Route path="contact" element={<Contact />} />
                <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
                <Route path="/grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return (
        <RouterProvider router={router} />
    )
}



export default App;