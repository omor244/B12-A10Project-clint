import { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContex from '../Context/AuthContex';
import { toast } from 'react-toastify';
import Loadding from '../../Loadder/Loadding';

const Login = () => {
    const { signinuser, googlesignin } = use(AuthContex)
    
    const emailref = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
   
 









    const handelonsubmite = (e) => {
        
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value 

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

       

     
     

        if (!passwordRegex.test(password)) {

            toast.error('Password must have: 1 uppercase, 1 lowercase, 1 special character, min 6 characters.')
            return
        }
        
        signinuser(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location.state ? location.state : '/')
               
            })
            .catch(err => {
               
                if (err.code === "auth/invalid-credential") {
                    toast.error('invalid-credential. Please try ageing')
                    return
                }
        })

    }

    const handelgooglesign = () => {
         
        googlesignin()
            .then(res => {
            
                navigate(location.state ? location.state : '/')

            }) 
            .catch(err => {
            console.log(err)
        })
    }



    
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1f2937] relative overflow-hidden">




            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-28 p-6 lg:p-10 text-white">

                <div className='space-y-3'>
                    <h1 className="  text-5xl font-extrabold s">  &quot;Login to
                        EcoTrack&quot; </h1>
                    
                    <p>Access your account and continue your journey toward a greener planet.</p>
               </div>

                {/* Login card */}
                <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">



                    <form onSubmit={handelonsubmite} className="space-y-5">
                        <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                            LogIn
                        </h2>

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                ref={emailref}
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm mb-1">Password</label>
                            <input
                                type={"password"}
                                name="password"
                                placeholder="••••••••"
                                required
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <span className=" top-9 absolute right-3 cursor-pointer "> </span>

                            <div><Link to={'/forget'} className="link link-hover">Forgot password?</Link></div>

                        </div>

                        <button type="submit" className=" btn btn-secondary w-full">
                            Login
                        </button>

                        {/* Divider */}
                        <div className="flex items-center justify-center gap-2 my-2">
                            <div className="h-px w-16 bg-white/30"></div>
                            <span className="text-sm text-white/70">or</span>
                            <div className="h-px w-16 bg-white/30"></div>
                        </div>

                        {/* Google Signin */}
                        <button
                          onClick={handelgooglesign}
                            type="button"

                            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="google"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>

                        <p className="text-center text-sm text-white/80 mt-3">
                            Don’t have an account?{" "}
                            <Link
                                to="/register"
                                className="text-yellow-300 hover:text-white underline"
                            >
                                Register
                            </Link>
                        </p>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Login;