import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import './nav.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DarkMode from "../../DarkMode/DarkMode"


const Navbar = () => {
    const {userInfo} = useContext(AuthContext)

  

    const navLinks =
     <>
         <li><NavLink id="sidebar" to='/'> Home</NavLink></li>
         <li className=""><NavLink to='/artncraft'>All Art & Craft Items</NavLink></li>
         <li className=""><NavLink to='/addCraft'> Add Craft Iteam</NavLink></li>
         <li><NavLink to='/myArtnCart'> My Art & Cart List</NavLink></li>
     </>

    // console.log(userInfo)    
    const handleLogOut = () =>{
      signOut(auth)
      .then(()=> toast.success("signOut Successfull"))
      .catch(error => console.log(error.message))
    }

    return (
        <div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52  ">
        {navLinks}
        <li className="text-left" onClick={handleLogOut}>Log out</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-family ">CraftyCorner</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1 space-x-8">
    {navLinks}
    
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    {
      userInfo ?  
      <div className="dropdown dropdown-end  z-50">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img title={userInfo.displayName} className="" src={userInfo.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li onClick={handleLogOut} className="cursor-pointer"><a>Logout</a></li>
      </ul>
    </div>
      :
       <Link to='/login' className="btn hover:bg-[#caabab] hover:text-black ">Log in</Link>
    }
  </div>
  <ToastContainer />
</div>
    );
};

export default Navbar;