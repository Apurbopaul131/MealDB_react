import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Errorpage from './Components/Errorpage/Errorpage.jsx';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Itemsearch from './Components/Itemsearch/Itemsearch';
import searchControl from './extra';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Header/>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=>fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"),
      },
      {
        path:"search/:searchName",
        element:<Itemsearch/>,
        loader:({params})=>{
          const {searchName} = params;
          return searchControl(searchName);
        }
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"login",
        element:<Login/>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
