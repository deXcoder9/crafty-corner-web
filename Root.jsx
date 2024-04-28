import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/shared/Navbar";
import './src/Root.css'


const Root = () => {
  return (
    <div>
     <Navbar></Navbar>
     <div className="">
     <Outlet></Outlet>
     </div>
    </div>
  );
};

export default Root;
