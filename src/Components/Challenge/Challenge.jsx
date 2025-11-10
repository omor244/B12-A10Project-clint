import { useEffect, useState } from "react";
import UseAPIhook from "../../Hooks/UseAPIhook";
import ChallengeCard from "../../Pages/ChallengeCard";
import { useLoaderData } from "react-router";
import Loadding from "../../Loadder/Loadding";



const Challenge = () => {
    const useAxios = UseAPIhook()
    const data = useLoaderData()
  const [select, setselect] = useState('')
    const Challenge = data.data
    const [challenges, setchallenges] = useState(Challenge)
    const [loadding, setloadding] = useState(true)

    useEffect(() => {
        
        useAxios.get(`/challengesitem?category=${select}`)
            .then(res => {
                
                setchallenges(res.data)
                setloadding(false)
        })
    },[select, useAxios])

      
    if (loadding) {
      return <Loadding></Loadding>
  }
    
    return (
        <div>
       

            <h1 className='text-[#69db7c] text-3xl mb-12  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>  🌿 Active Challenges – Take Part & Make a Difference</h1>

            <div className="flex py-10 justify-between  items-center mx-auto max-w-11/12 ">
                <div className="text-2xl lg:text-4xl font-bold">All Challenges</div>
                <div>
                    <select onChange={(e) => setselect(e.target.value)} defaultValue="Pick a font" className="select select-ghost w-40 border">
                        <option  disabled={true}>Select Category</option>
                        <option>Waste Reduction</option>
                        <option>Energy Conservation</option>
                        <option>Water Conservation</option>
                        <option>Sustainable Transport</option>
                        <option>Green Living</option>
                    </select>
                </div>
             </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-8'>
                {
                    challenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge}></ChallengeCard>)
                }
            </div>
        </div>
    );
};

export default Challenge;