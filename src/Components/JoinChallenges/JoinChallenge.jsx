import { useEffect, useState, useContext } from "react";

import AuthContex from "../Context/AuthContex";
import { useParams } from "react-router";
import UseAPIhook from "../../Hooks/UseAPIhook";
import { toast } from "react-toastify";


const JoinChallenge = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContex);
    const [challenge, setChallenge] = useState(null);
    const [joined, setJoined] = useState(false);
    const axiosapi = UseAPIhook()

    useEffect(() => {
        axiosapi.get(`/join/${id}`)
            .then(res => {
                console.log(res.data)
                setChallenge(res.data)
            })
            
    }, [id, axiosapi]);

    const handeljoin = () => {
          
           
        const newdata = {
            userEmail: user.email,
            challengeId: challenge._id,
            status: "NotStarted",
            progress: 0,
            joinDate: new Date(),
        }
   
        axiosapi.post(`/challenges/${challenge._id}/join`, newdata)
            .then(res => {
                console.log(res.data)
                toast.success('successfully joined')
                  
            })
            .catch(err => {
                console.log(err.message)
                 
            })
    }
    // if (!challenge) return <p>Loading...</p>;

    const {imageUrl,title, description,category} = challenge || {}

    return (
        <div className="max-w-3xl mx-auto p-6">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover rounded-xl mb-6"
            />

            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-white mb-4">{description}</p>

            <div className="flex gap-4 text-sm text-white mb-4">
              
                <p>Category: {category}</p>
                
            </div>

            {joined ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-xl">
                    🎉 You’ve joined this challenge! Start tracking in{" "}
                    <a href="/my-activities" className="underline font-semibold">
                        My Activities
                    </a>
                </div>
            ) : (
                <button
                   onClick={handeljoin}
                    className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
                >
                    Join Challenge
                </button>
            )}
        </div>
      
       
    );
};

export default JoinChallenge
