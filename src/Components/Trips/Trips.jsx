import { useLoaderData } from "react-router";
import TripsCard from "../../Pages/TripsCard";


const Trips = () => {
    const data = useLoaderData()
    

    console.log(data.data)
    return (
        <div>
            
        

            <h1 className='text-[#69db7c] text-3xl mb-12  p-3 lg:p-0 lg:text-5xl font-bold mt-18 text-center'> ✨ Top Tips from Our Community</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-8'>

                {
                    data.data.map(trip => <TripsCard key={trip._id} trip={trip}></TripsCard>)
                }
            </div>
        </div>
    );
};

export default Trips;