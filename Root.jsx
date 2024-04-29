import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/shared/Navbar";
import './src/Root.css'
import useLocalStorage from "use-local-storage";
import { Toggle } from "../client_side/src/DarkMode/Toggle";
import Footer from "./src/Components/shared/Footer/Footer";


const Root = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
<div className="App" data-theme={isDark ? "black" : "light"}> 
      <div className="relative">

     <Navbar></Navbar>
      <Toggle  isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>
     <Outlet></Outlet>
     <Footer></Footer>
     </div>
  );
};

export default Root;
