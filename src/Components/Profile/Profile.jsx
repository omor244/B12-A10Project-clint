import { use } from "react";
import AuthContex from "../Context/AuthContex";


const Profile = () => {
    const {user} = use(AuthContex)
    return (
        <div>
            <div className=" bg-base-300 pb-14">

                <div className=" relative border min-h-[500px] py-12 border-gray-600 rounded">
                    <div className="w-32 border rounded-full absolute bottom-[-50px] left-8 h-32 ">
                        <img className="w-full rounded-full object-cover" src={user.photoURL} alt="" />
                    </div>


                </div>


                <div className="flex w-11/12 mx-auto justify-between items-center">
                    <div className="mt-24">
                        <h3 className="text-2xl px-10 font-bold ">Name : {user.displayName}</h3>
                        <p className="text-lg px-10 mt-2 text-gray-600">Email : {user.email}</p>

                    </div>

                   
                </div>

            </div>
        </div>
    );
};

export default Profile;