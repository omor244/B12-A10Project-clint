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
   


    useEffect(() => {
          
        axisoapi.get(`/challengemail?email=${email}`)
            .then(data => {
              
                setdata(data.data)
                setloadding(false)
        })
    }, [axisoapi, email])
    
    if (loadding) {
        return <Loadding></Loadding>
    }
    
    return (
        <div>
          

            <h1 className='text-[#69db7c] text-3xl my-16  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'> Manage Your Challenges</h1>
             
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-8'>
                {
                    data.map(challenge => <MyActiveCard key={challenge._id} challenge={challenge}></MyActiveCard>)
                }
            </div>
           
        </div>
    );
};

export default Myactivity;