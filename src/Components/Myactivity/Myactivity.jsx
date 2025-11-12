import {  useContext, useEffect, useState } from "react";
import UseAPIhook from "../../Hooks/UseAPIhook";
import AuthContex from "../Context/AuthContex";
import MyActiveCard from "../../Pages/MyActiveCard";
import Loadding from "../../Loadder/Loadding";


;

const Myactivity = () => {
    const axisoapi = UseAPIhook()
    const { user } = useContext(AuthContex)
    const email = user?.email;
    const [data, setdata] = useState([])
    const [loadding, setloadding] = useState(true)
    const [reffer, setreffter] = useState(false)


    useEffect(() => {
          
        axisoapi.get(`/challengemail?email=${email}`)
            .then(data => {
              
                setdata(data.data)
                setloadding(false)
        })
    }, [axisoapi, email, reffer])
    
    if (loadding) {
        return <Loadding></Loadding>
    }

 
    return (
        <div>
          

            <h1 className='text-[#0EA5E9] text-3xl my-16  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'> Manage Your Challenges</h1>
             
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 lg:w-10/12 mx-auto mb-8'>
                {
                    data.map(challenge => <MyActiveCard key={challenge._id} challenge={challenge} reffer={reffer} setreffter={setreffter} ></MyActiveCard>)
                }
            </div>
           
        </div>
    );
};

export default Myactivity;