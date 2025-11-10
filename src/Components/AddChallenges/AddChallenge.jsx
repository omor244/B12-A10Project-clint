import { use } from "react";
import AuthContex from "../Context/AuthContex";


const AddChallenge = () => {
    const {user} = use(AuthContex)

    const handleSubmit = e => {
        e.preventDefault()
        const title = e.target.name.value
        const cagetory = e.target.category.value
        const discription = e.target.description.value
        const photo = e.target.photo.value
            
            console.log(title, cagetory, discription, photo)
        
        const newdata = {
            title: title,
            category: cagetory,
            description: discription,
            imageUrl: photo,
            startDate: new Date(),
            created_by: user.name,
            participants: 0,
        }
        
        
    }
    return (
        <div>
            <div className="card border border-gray-200 bg-base-100  my-20 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="label font-medium">Title</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Title"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="space-y-2">
                            <label className="label font-medium">Category</label>
                          
                            <select defaultValue="Pick a font"
                             name="category"
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                            >

                                <option disabled={true}>select a cagetory</option>
                                <option>Waste Reduction</option>
                                <option> Energy Conservation</option>
                                <option> Water Conservation</option>
                                <option> Sustainable Transport</option>
                                <option> Green Living</option>
                            </select>
                                
                               
                        
                        </div>

                        {/* Description Textarea */}
                        <div className="space-y-2">
                            <label className="label font-medium">Description</label>
                            <textarea
                                name="description"
                                required
                                rows="3"
                                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                                placeholder="Enter description"
                            ></textarea>
                        </div>

                        {/* Thumbnail URL */}
                        <div className="space-y-2">
                            <label className="label font-medium">Thumbnail URL</label>
                            <input
                                type="url"
                                name="photo"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                        >
                            Add Model
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddChallenge;