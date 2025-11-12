import { Link } from "react-router";
import UseAPIhook from "../Hooks/UseAPIhook";
import { toast } from "react-toastify";


const MyActiveCard = ({ challenge, setreffter, reffer }) => {
    const axiosapi = UseAPIhook()


    const { imageUrl, title, category, _id, impactMetric } = challenge || {}



    const handeldelete = () => {


        axiosapi.delete(`/delete/${_id}`)
            .then(res => {
                console.log(res.data.deletedCount)
                if (res.data.deletedCount) {
                    toast.success('Successfully Deleted')
                    setreffter(!reffer)
                }
            })
            .catch(err => {
                console.log(err)
            })

    }



    return (
        <div className="card bg-[#1f2937]  shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-2">
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
                    <div className="flex gap-22 lg:gap-44 text-sm justify-between items-center text-base-content/60">

                        <div>
                            <Link to={`/join/${_id}`} className="btn rounded-full btn-outline hover:bg-[#1f2937] text-white  btn-sm">Join this challenge</Link>
                        </div>
                        <div>
                            <button onClick={handeldelete} className="btn rounded-full  btn-outline hover:bg-[#1f2937] text-white  btn-sm">Delete</button>
                        </div>
                    </div>
                    <Link to={`/myactivedetails/${_id}`} className="btn rounded-full bg-gradient-to-r from-orange-400 to-pink-500
                    hover:from-orange-500 hover:to-pink-600   text-white w-full btn-sm">View</Link>
                </div>
            </div>
        </div>
    );
};

export default MyActiveCard;