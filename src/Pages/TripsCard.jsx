import Marquee from "react-fast-marquee";


const TripsCard = ({ trip }) => {

    const {title, authorName, upvotes, createdAt} = trip
    
    return (
        <div className="card bg-[#1f2950] hover:scale-y-110 0 ">
         
            <div className="card-body ">
                <h2 className="card-title text-xl font-bold">{ title}</h2>
               
          
                    <div>
                        <p>Name: {authorName}</p>
                        <p>Upvotes:  {upvotes}</p>

                    </div>
              
                <div className="card-actions justify-end">
                    <button className="badge text-sm"> <p> {createdAt}</p></button>
                </div>
                  
                
                  
               
            </div>
        </div>
    );
};

export default TripsCard;