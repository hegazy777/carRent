 
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'; 
import CarCard from   './Components/carCard/CarCard';
import AllCars from   './Components/AllCars/AllCars';
import SingleCar from './Components/SingleCar/SingleCare';
function App() {
 
let routes = createBrowserRouter([
  {
    path:"/",
    element:<CarCard/>,

  },
  {
    path:"/AllCars",
    element:<AllCars/>
  },
  {
    path:"/car/:id" ,
    element:<SingleCar/>
  }
])
  return (
    <>
       <RouterProvider router={routes}></RouterProvider>
    </>
 
  )
}

export default App;
