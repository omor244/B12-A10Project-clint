
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContex from "../Context/AuthContex";
import { toast } from "react-toastify";
import Loadding from "../../Loadder/Loadding";



const Register = () => {
    const { createuser, updateuser, googlesignin } = useContext(AuthContex)
    const [loadding, setloadding] = useState(true)
     

    
    const navigate = useNavigate()
    const location = useLocation()
   
    if (loadding) {
        return <Loadding></Loadding>
    }
    
    const handelonsubmite = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

        

      

        if (!passwordRegex.test(password)) {

            toast.error('Password must have: 1 uppercase, 1 lowercase, 1 special character, min 6 characters.')
            return
        }

        // email and password

        createuser(email, password)
            .then(res => {

                 
                updateuser({ displayName: name, photoURL: photo })
                    .then(res => {
                    })
                    .catch(err => {
                       
                    })
                navigate(location.state ? location.state : '/')
                setloadding(false)
            })
            .catch(err => {

                if (err.code === 'auth/email-already-in-use') {
                    toast.error('Already have an Account')
                    return
                }

            })
    }




    const handelgooglesign = () => {

        googlesignin()
            .then(res => {


                navigate(location.state ? location.state : '/')
                toast.success('Successfully Register')
                setloadding(false)
            })
            .catch(err => {

            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1f2937] relative overflow-hidden">
            {/* Animated glow orbs */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
            </div>


            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-28 p-6 lg:p-10 text-white">

                <div className="w-[500px] text-center space-y-3 lg:text-left">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">
                        &quot;Join EcoTrack&quot;
                    </h1>
                    <p>Register now to track your progress and share sustainable tips.</p>

                </div>


                <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">



                    <form onSubmit={handelonsubmite} className="space-y-5">
                        <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                            Create Your Account
                        </h2>

                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">photoURL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="photoURL"
                                required
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="••••••••"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <button type="submit" className=" btn btn-secondary w-full">
                            Register
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
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-yellow-300 hover:text-white underline"
                            >
                                Login
                            </Link>
                        </p>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Register;