import React from "react"
import {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {Outlet} from "react-router-dom"
import Error from "./components/Error"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import { Provider } from "react-redux"
import appStore from "./redux slice/appStore"
import Cart from "./components/Cart"
import userContext from "./utils/userContext"

/*
    Grocery is loaded lazy using lazy function
    Dynamic loading
    This component is loaded only when directed to its link
*/

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => (
    <Provider store={appStore}>
        <div className="App">
        <Header/>
        <Outlet/>
        </div>
    </Provider>
)

/*
    Outlet renders the components according to the path in the url
*/

const appRouter = createBrowserRouter([
    {
        path: "/", 
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId", 
                /*
                    "/:dynamic url" , here 'resId' is dynamic. It can be fetch
                */
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: 
                <Suspense fallback = {<Shimmer />}>
                    <Grocery />
                </Suspense>
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter}/>);