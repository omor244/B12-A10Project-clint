
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png.png'
import { use } from 'react';
import AuthContex from '../Context/AuthContex';
const Navber = () => {

    const { user, signoutuser } = use(AuthContex)
 
  
    const handelsignout = () => {

        signoutuser()
            .then(res => {
               
            })
            .catch(err => {
              
            })
    }

    const links = <>
        <li><NavLink to={'/'}>Home </NavLink></li>
        <li><NavLink to={'challenges'}>Challenges </NavLink></li>
        <li><NavLink to={'myactivity'}> My Activities</NavLink></li>
        <li><NavLink to={'/trips'}> Trips</NavLink></li>
        <li><NavLink to={'/addchallenge'}> add-challenge</NavLink></li>




    </>
    return (
        <div className="navbar bg-[#1f2937] px-10 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm z-20 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home </NavLink></li>
                        <li><NavLink to={'challenges'}>Challenges </NavLink></li>
                        <li><NavLink to={'myactivity'}> My Activities</NavLink></li>

                    </ul>
                </div>
                <Link to={'/'} className=" text-xl"><img className='max-w-28' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                
                {user ? (

                    <div  >




                        <div className="dropdown z-50 dropdown-end">

                            <div tabIndex={0} role="button" className=" w-12  h-12 rounded-full  m-1">
                                <img src={user?.photoURL}
                                    className="w-12 h-12 rounded-full" alt="" /></div>

                            <ul tabIndex="-1" className="dropdown-content  font-semibold menu bg-white/20  text-white  rounded-box z-1 w-52 p-2 shadow-sm">
                                <li className=" hover:bg-black/70 hover:text-white text-lg "><NavLink to={'/profile'}>Profile</NavLink></li>
                                <li className=' hover:bg-black/70 hover:text-white text-lg'><NavLink to={'myactivity'}> My Activities</NavLink></li>
                                <li ><button className="btn bg-white/50 text-black" onClick={handelsignout}>Sign Out</button ></li>
                            </ul>
                        </div>
                    </div>
                ) : <Link to={'/login'} className="text-lg btn font-medium">Login </Link>}
            </div>
        </div>

    );
};

export default Navber;