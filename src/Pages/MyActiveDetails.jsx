import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import UseAPIhook from "../Hooks/UseAPIhook";
import { toast } from "react-toastify";


const MyActiveDetails = () => {
    const { id } = useParams()
    const axiosapi = UseAPIhook()
    const [data, setdata] = useState([])
    const modalref = useRef(null)
    const [reffter, setreffter] = useState(false)
  
   
    useEffect(() => {

        axiosapi.get(`/challenges/${id}`)
            .then(data => {
                
                setdata(data.data)
            })

    }, [axiosapi, id, reffter])
      

    const hnadelupdate = () => {
      modalref.current.showModal()
    }

    const handelonupdate = e => {
        e.preventDefault()

        const title = e.target.title.value 
        const email = e.target.email.value 
        console.log(title, email)

        const newdata = {
            title: title, 
            createdBy: email,
        }

        axiosapi.patch(`/update/${data._id}`, newdata)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    toast.success('Successfully Updated')
                     modalref.current.close()
                    setreffter(!reffter)
                    setdata(res.data)
                }
        })

    }
 
    const { imageUrl, title, category, _id,  description } = data || {}

    return (
        <div className="p-2">
            <div className="lg:flex bg-[#1f2950]   items-start mt-12 gap-12">
                <div>
                    <img className=" w-[480px]   overflow-hidden object-cover" src={imageUrl} alt="" />
                </div>
                <div className="py-4 space-y-4">
                    <h1 className="text-2xl md:text-3xl tracking-widest pb-3 lg:text-4xl font-bold">{title}</h1>
                    <h2 className="text-lg font-medium">Category: {category}</h2>
                    <p className="max-w-[600px] tracking-wider font-medium"> Description: {description}</p>
                    <button onClick={hnadelupdate} className="btn hover:shadow-xl px-8 mt-2  btn-outline">Update Now</button>
                </div>
            </div>



            <div className=" bg-[#1f2950] text-xl p-5 my-16 rounded-lg font-medium">
                <p className="leading-10 max-w-10/12 mx-auto">
                    Welcome to your Active Challenges page in EcoTrack — the Sustainable Living Community! This is your personal hub for all ongoing eco-friendly challenges you are participating in or have created. Each challenge is designed to encourage sustainable habits, from reducing waste and conserving energy to planting trees and supporting local green initiatives. Here, you can track your progress, monitor your environmental impact, and celebrate every small step toward a greener lifestyle. Engage with the EcoTrack community, share your achievements, and get inspired by the actions of others. By completing challenges, you not only improve your own sustainable practices but also contribute to a collective effort to protect our planet. Stay motivated, stay connected, and turn your eco-conscious actions into lasting, meaningful change.
                </p>
            </div>

        

            <dialog ref={modalref} id="my_modal_1" className="modal ">
                <div className="modal-box bg-[#1f2950] ">
                    <form onSubmit={handelonupdate} className="fieldset space-y-2">
                        <label className="label">Title</label>
                        <input type="text" name="title" className="input w-full" placeholder="Title" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email" />
                        <button className="btn btn-neutral mt-4">update</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyActiveDetails