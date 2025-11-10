import { Link } from "react-router";


const ChallengeCard = ({ challenge }) => {
    
    
    const { imageUrl, title,  category, _id, impactMetric } = challenge
    return (
        <div className="card bg-[#1f2937] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-2">
            <figure className="h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover  transition-transform duration-300"
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <div className="badge text-lg badge-lg badge-neutral rounded-full">{category}</div>
                <div className="text-xs text-white ml-2">{impactMetric}</div>
              
                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex gap-4 text-sm text-base-content/60">
                
                    </div>
                    <Link to={`/details/${_id}`} className="btn rounded-full bg-linear-to-r from-[#69db7c] to-green-700  text-white w-full btn-sm">View</Link>
                </div>
            </div>
        </div>
    );
};

export default ChallengeCard;