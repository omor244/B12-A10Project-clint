

const AddChallenge = () => {

    const handleSubmit = e => {
        e.preventDefault()
           

        const newdata = {
            title: e.target.title.value,
            category: e.target.category.value,
            description: e.target.description.value,
            imageUrl: e.target.photo.value,
            startDate: new Date(),
           
            created_by: 'omoronfire90909@gmail.com',
            participants: 0,
        }
        
    }
    return (
        <div>
            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="label font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Title"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="space-y-2">
                            <label className="label font-medium">Category</label>
                            <select
                                defaultValue={""}
                                name="category"
                                required
                                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                            > 
                                 

                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="Vehicles">Waste Reduction</option>
                                <option value="Plants">Energy Conservation</option>
                               
                                <option value="Home & Living">Water Conservation</option>

                                <option value="Characters">Sustainable Transport</option>
                                <option value="Space">Green Living</option>
                               
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
                                name="Photo"
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