

const TripsCard = ({ trip }) => {

    const {title, authorName, upvotes, createdAt} = trip
    console.log(trip)
    return (
        <div className="card bg-[#1f2937] w-72 ">
            <div className="card-body">
                <h2 className="card-title">{ title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TripsCard;