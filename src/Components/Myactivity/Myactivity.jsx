import {  useContext, useEffect, useState } from "react";
import UseAPIhook from "../../Hooks/UseAPIhook";
import AuthContex from "../Context/AuthContex";
import MyActiveCard from "../../Pages/MyActiveCard";
import Loadding from "../../Loadder/Loadding";
import Title from "../../Hooks/Title";


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
          

          
            <Title title={'Manage Your Challenges'}></Title>
             
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 lg:w-10/12 mx-auto mb-8'>
                {
                    data.map(challenge => <MyActiveCard key={challenge._id} challenge={challenge} reffer={reffer} setreffter={setreffter} ></MyActiveCard>)
                }
            </div>
           
        </div>
    );
};

export default Myactivity;