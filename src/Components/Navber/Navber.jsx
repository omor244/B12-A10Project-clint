
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png.png'
import { use } from 'react';
import AuthContex from '../Context/AuthContex';
import useTheme from '../../Them/useTheme';
const Navber = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, signoutuser, loadding } = use(AuthContex)
 
  
    const handelsignout = () => {

        signoutuser()
          
    }

    const links = <>
        <li><NavLink to={'/'}>Home </NavLink></li>
        <li><NavLink to={'challenges'}>Challenges </NavLink></li>
        <li><NavLink to={'myactivity'}> My Activities</NavLink></li>
        <li><NavLink to={'/trips'}> Trips</NavLink></li>
        <li><NavLink to={'/addchallenge'}> add-challenge</NavLink></li>




    </>


    if (loadding) {
        return <p>Loadding...</p>
    }
    return (
        <div className="navbar bg-[#1f2937] text-white px-10 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm z-20  bg-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                     {links}

                    </ul>
                </div>
                <Link to={'/'} className=" text-xl"><img className='max-w-28' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end  space-x-4">
                
                <div>
                    <li className=" hover:text-white mb-4  mr-[-20px] lg:mr-0  text-lg flex"><label className="swap swap-rotate btn btn-ghost btn-circle">
                        <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
                        <svg className="swap-on fill-current w-6 h-6" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71m14.14-14.14L18.36,4.34M7,11H4m13,0h3m-9,7v3m0-18V5M17,17l.71.71M6.34,6.34,5.64,5.64M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Z" /></svg>
                        <svg className="swap-off fill-current w-6 h-6" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" /></svg>
                    </label> </li>
               </div>

                {
                    loadding ? <p>Loadding...</p> : <>
                        {user ? (
                  
                            <div  >


                                <div className="dropdown z-50  dropdown-end">

                                    <div tabIndex={0} role="button" className=" w-12  h-12 rounded-full  m-1">
                                        <img src={user?.photoURL}
                                            className="w-12 h-12 rounded-full" alt="" /></div>
                                    
                                    <div className=' '>

                                        <ul tabIndex="-1" className="dropdown-content  font-semibold menu bg-black text-white  rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li className=" hover:bg-black/70 hover:text-white text-lg "><NavLink to={'/profile'}>Profile</NavLink></li>
                                     
                                        <li className=' hover:bg-black/70 hover:text-white text-lg'><NavLink to={'myactivity'}> My Activities</NavLink></li>
                                        <li ><button className="btn bg-white/50 text-black" onClick={handelsignout}>Sign Out</button ></li>
                                    </ul>
                                    </div>

                                </div>
                            </div> 
                        ) : <Link to={'/login'} className="text-lg btn bg-gradient-to-r from-orange-400 to-pink-500
                    hover:from-orange-500 hover:to-pink-600  font-medium">Login </Link>}
                    </>
              }
            </div>
        </div>

    );
};

export default Navber;