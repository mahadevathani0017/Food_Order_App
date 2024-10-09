import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import  Body  from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
  },
  {
    path:"/about",
    element:<About/>
  }
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.rendor(<AppLayout/>)
