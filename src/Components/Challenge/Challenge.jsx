import { useEffect, useState } from "react";
import UseAPIhook from "../../Hooks/UseAPIhook";
import ChallengeCard from "../../Pages/ChallengeCard";



const Challenge = () => {
    const useAxios = UseAPIhook()
    const [challenges, setchallenges] = useState([])

    useEffect(() => {
        useAxios.get('/challenges')
            .then(data => {
                console.log(data.data)
                setchallenges(data.data)
        })

    },[useAxios])
    
    return (
        <div>
       

            <h1 className='text-[#69db7c] text-3xl mb-12  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>  🌿 Active Challenges – Take Part & Make a Difference</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-8'>
                {
                    challenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge}></ChallengeCard>)
                }
            </div>
        </div>
    );
};

export default Challenge;