import { Link } from "react-router";


const ChallengeCard = ({ challenge }) => {
    // title, category, short , , ,

    const { imageUrl, title, category, duration, _id, participants, description } = challenge
    return (
        <div className="card bg-[#1f2955] shadow-xl h-[500px] text-white hover:shadow-2xl  hover:scale-105 transition-all duration-300 hover:-translate-y-2">
            <figure className="h-52 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover  transition-transform duration-300"
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                
                <div className="flex items-center   justify-between">
                    <div className="badge text-lg badge-lg badge-neutral rounded-full">
                        <p className="text-xs text-white "> {category}</p>
                    </div>
                    <div>
                        <p className="text-md text-white  font-semibold "> Duration : {duration}</p>
                    </div>
                </div>
                <div>
                    Description: {description}
                </div>

                    <div className="">

                        <div className="flex items-center gap-5 justify-between">
                            <p>
                                <Link to={`/join/${_id}`} className="btn rounded-full btn-outline hover:bg-[#1f2937] text-white  btn-sm">Join this challenge</Link>
                            </p>
                            <button className="btn rounded-full   btn-outline hover:bg-[#1f2937] text-white  btn-sm"> participation: {participants}</button>
                        </div>
                        
                    </div>
                <div className="card-actions justify-between items-center ">

                    <Link to={`/details/${_id}`} className="
                    btn rounded-full
                     bg-gradient-to-r from-primary to-secondary
                    hover:from-primary hover:to-secondary
                     text-black w-full btn-sm">View</Link>

                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;