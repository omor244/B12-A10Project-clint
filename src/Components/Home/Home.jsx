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
import Title from '../../Hooks/Title';

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

           
            <Title title={'Real-Time Eco Impact — See What We’ve  Achieved'}></Title>

            <div className=' lg:w-10/12 p-4 mx-auto space-y-14'>
                <div >
                    <LiveStatistics></LiveStatistics>
                </div>

               

                <Title title={'Join a Challenge, Make a Difference'}></Title>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-8'>
                    {
                        challenges.data.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge}></ChallengeCard>)
                    }
                </div>

                <p className=' text-center  lg:text-end'> <Link to={'/challenges'} className=' btn text-[#0EA5E9] mr-30 text-lg '>View All Challenges</Link></p>
                

                
                <Title title={'🌱 Latest Eco Tips from the Community'}></Title>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   mb-8'>

                    {
                        trips.map(trip => <TripsCard key={trip._id} trip={trip}></TripsCard>)
                    }
                </div>
              
                <Title title={'♻️ Upcoming Eco Events & Activities'}></Title>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-8'>
                    {
                        events.map(event => <EventCard key={event._id} event={event}></EventCard>)
                    }
                </div>

              
                <Title title={'🌿 Why Go Green?'}></Title>
                <div>
                    <WhytoGreen></WhytoGreen>
                </div>

            
                <Title title={'How It Works'}></Title>

                <div className='lg:flex gap-5 text-white  mb-12'>
                    <HowWork></HowWork>
                </div>
            </div>
        </div>
    );
};

export default Home;