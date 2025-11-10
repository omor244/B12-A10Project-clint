

const EventCard = ({ event }) => {

    const { title, date, location, description } = event
    return (
        <div className="card bg-[#1f2950] hover:scale-y-110 0 ">
            <div className="card-body ">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <div className="space-y-3">
                    <p>Location: {location}</p>
                    <p>Date:  {date}</p>
                    <p>Description:  {description}</p>

                </div>
            </div>
        </div>
    );
};

export default EventCard;