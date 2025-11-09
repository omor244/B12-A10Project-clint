import React from 'react';
import Banner from '../../Pages/Banner';
import LiveStatistics from '../../Pages/LiveStatistics';
import { useLoaderData } from 'react-router';
import ChallengeCard from '../../Pages/ChallengeCard';

const Home = () => {
    const challenges = useLoaderData()
    console.log(challenges.data)
    return (
        <div className='space-y-12'>
            <Banner></Banner>
             
            <h1 className='text-[#69db7c] text-3xl p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>Real-Time Eco Impact — See What We’ve  Achieved</h1>

            <LiveStatistics></LiveStatistics>
           
            <h1 className='text-[#69db7c] text-5xl font-bold mt-18 text-center'>Join a Challenge, Make a Difference</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-8'>
                {
                    challenges.data.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge}></ChallengeCard>)
                }
            </div>
        </div>
    );
};

export default Home;