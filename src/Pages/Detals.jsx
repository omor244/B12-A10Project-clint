
import { use, useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router';
import AuthContex from '../Components/Context/AuthContex';
import UseAPIhook from '../Hooks/UseAPIhook';
import { toast } from 'react-toastify';


const Detals = () => {
    
    const {id} = useParams()
    const { user } = use(AuthContex)
    const axisoapi = UseAPIhook()
    const axiosapi = UseAPIhook()
    const [data, setdata] = useState([])
    const [reffter, setreffer] = useState(false)
    const { imageUrl, title, category, _id, impactMetric, participants, description } = data || {}
  

    useEffect(() => {
        axiosapi.get(`/challenges/${id}`)
            .then(data => {
            
                setdata(data.data)
        })
    },[axiosapi, data, reffter])

    const handeljoin = () => {
       
        
        const newdata = {
            userEmail: user.email, 
            challengeId: data._id,
            status: "NotStarted", 
            progress: 0,
            joinDate: new Date(),
        }

        axisoapi.post(`/challenges/${data._id}/join`, newdata)
            .then(res => {
                console.log(res.data)
                toast.success('successfully joined')
                setreffer(!reffter)
            })
            .catch(err => {
                console.log(err.message)
              
        })

        
    }
    return (
        <div className=" py-10">
            <div className=" bg-[#1f2937] lg:flex items-center gap-8 p-5  ">
                <div>
                    <img className=" rounded w-[800px] h-[800px]  object-cover" src={imageUrl} alt="" />
                </div>
                <div>
                    <h1 className="text-5xl py-6 space-y-6  font-bold tracking-widest">{title}</h1>
                    <p className="text-gray-600 leading-8 text-lg hover:text-black"></p>
                    <div className=" space-y-8 pt-10 items-center gap-14">
                        <p className=" text-xl font-medium text-white">
                            category: {category}</p>

                        <p className=" text-xl font-medium text-white">
                            participants: {participants}</p>
                        <p className=" text-xl font-medium text-white">
                            Metric: {impactMetric}</p>


                        <p>Sort-Description: {description}</p>

                        <a onClick={handeljoin} className='btn px-8 rounded-md'>Join this challenge</a>
                    </div>



                    {/* <div className="card  mt-12  bg-base-100 w-full  shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h2 className="text-center font-medium text-xl">Book Consultation</h2>
                            <form >
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input required type="text" className="input w-full" placeholder="Name" />

                                    <label className="label">Email</label>
                                    <input required type="email" className="input w-full" placeholder="Email" />

                                    <button className="btn btn-neutral mt-4">Book Now</button>
                                </fieldset>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>



        </div>
    );
};

export default Detals;