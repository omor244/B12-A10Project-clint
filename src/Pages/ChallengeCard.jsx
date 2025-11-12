import { Link } from "react-router";


const ChallengeCard = ({ challenge }) => {
    // title, category, short , , ,

    const { imageUrl, title, category, duration, _id, participants, description } = challenge
    return (
        <div className="card bg-[#1f2937] shadow-xl hover:shadow-2xl  hover:scale-105 transition-all duration-300 hover:-translate-y-2">
            <figure className="h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover  transition-transform duration-300"
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <div className="flex items-center ">
                    <div className="badge text-lg badge-lg badge-neutral rounded-full">
                        <p className="text-xs text-white ml-2"> {category}</p>
                    </div>
                    <p className="text-md text-white ml-30 font-semibold "> Duration : {duration}</p>
                </div>
                <div>
                    Description: {description}
                </div>

                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex gap-4 text-sm text-base-content/60">

                        <Link to={`/join/${_id}`} className="btn rounded-full btn-outline hover:bg-[#1f2937] text-white  btn-sm">Join this challenge</Link>
                        <button className="btn rounded-full ml-28 btn-outline hover:bg-[#1f2937] text-white  btn-sm"> participation: {participants}</button>
                    </div>

                    <Link to={`/details/${_id}`} className="
                    btn rounded-full
                     bg-gradient-to-r from-orange-400 to-pink-500
                    hover:from-orange-500 hover:to-pink-600 
                     text-white w-full btn-sm">View</Link>

                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;