
import {  useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router';

import UseAPIhook from '../Hooks/UseAPIhook';

import Loadding from '../Loadder/Loadding';


const Detals = () => {
    
    const {id} = useParams()
    
    const axiosapi = UseAPIhook()
    const [data, setdata] = useState([])
    const [loadding, setloadding] = useState(true)
    const { imageUrl, title, category, _id, impactMetric, participants, description } = data || {}
  

    useEffect(() => {
        axiosapi.get(`/challenges/${id}`)
            .then(data => {
            
                setdata(data.data)
                setloadding(false)
        })
    },[axiosapi, data])

    if (loadding) {
        return <Loadding></Loadding>
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


                        <p className='max-w-[800px]'>Sort-Description: {description}</p>

                        <Link  className='btn px-8 rounded-md'>Join this challenge</Link>
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