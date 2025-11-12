import React, { useEffect, useState } from 'react';
import Banner from '../../Pages/Banner';
import LiveStatistics from '../../Pages/LiveStatistics';
import { Link, useLoaderData } from 'react-router';
import ChallengeCard from '../../Pages/ChallengeCard';
import UseAPIhook from '../../Hooks/UseAPIhook';
import TripsCard from '../../Pages/TripsCard';
import EventCard from '../../Pages/EventCard';
import WhytoGreen from '../../Pages/WhytoGreen';
import HowWork from '../../Pages/HowWork';

const Home = () => {
    const challenges = useLoaderData()
    const [trips, settrips] = useState([])
    const [events, setevents] = useState([])
    const axiostrips = UseAPIhook()
    useEffect(() => {
        axiostrips.get('/trips/limit')
            .then(data => {

                settrips(data.data)
            })
    }, [axiostrips])

    useEffect(() => {

        axiostrips.get('/events',)
            .then(data => {


                setevents(data.data)
            })
    }, [axiostrips])

    return (
        <div className='space-y-12'>
            <Banner></Banner>

            <h1 className='text-[#0EA5E9] text-3xl p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>Real-Time Eco Impact — See What We’ve  Achieved</h1>

            <div className=' lg:w-10/12 p-4 mx-auto space-y-14'>
                <div className=' max-w-11/12 mx-auto'>
                    <LiveStatistics></LiveStatistics>
                </div>

                <h1 className='text-[#0EA5E9] text-5xl font-bold mt-18 text-center'>Join a Challenge, Make a Difference</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-8'>
                    {
                        challenges.data.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge}></ChallengeCard>)
                    }
                </div>

                <p className=' text-center  lg:text-end'> <Link to={'/challenges'} className=' btn text-[#0EA5E9] mr-30 text-lg '>View All Challenges</Link></p>

                <h1 className='text-[#0EA5E9] text-3xl  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>🌱 Latest Eco Tips from the Community</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   mb-8'>

                    {
                        trips.map(trip => <TripsCard key={trip._id} trip={trip}></TripsCard>)
                    }
                </div>
                <h1 className='text-[#0EA5E9] text-3xl  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>♻️ Upcoming Eco Events & Activities</h1>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-8'>
                    {
                        events.map(event => <EventCard key={event._id} event={event}></EventCard>)
                    }
                </div>

                <h1 className='text-[#0EA5E9] text-3xl  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>🌿 Why Go Green?</h1>

                <div>
                    <WhytoGreen></WhytoGreen>
                </div>

                <h1 className='text-[#0EA5E9] text-3xl  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'>How It Works</h1>

                <div className='lg:flex gap-5  mb-12'>
                    <HowWork></HowWork>
                </div>
            </div>
        </div>
    );
};

export default Home;