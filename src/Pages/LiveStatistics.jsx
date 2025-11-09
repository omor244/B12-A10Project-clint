

const LiveStatistics = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-11/12 mx-auto gap-6">
            <div className="card bg-[#1f2955] text-primary-content h-28 text-center ">
                <div className="card-body mx-auto">
                    <h2 className="card-title mx-auto">⚡ Total Energy</h2>
                    <p>18950.7 Kwh</p>
                   
                </div>
            </div>
            <div className="card bg-[#1f2955] text-primary-content h-28 text-center ">
                <div className="card-body mx-auto">
                    <h2 className="card-title mx-auto">🧴 Total Kilograms</h2>
                    <p>2390.4 kg</p>
                    
                </div>
            </div>
            <div className="card bg-[#1f2955] text-primary-content h-28 text-center ">
                <div className="card-body mx-auto">
                    <h2 className="card-title mx-auto">🌿Total CO₂ Saved</h2>
                    <p>4825.6 kg</p>
                  
                </div>
            </div>
            <div className="card bg-[#1f2955] text-primary-content h-28 text-center ">
                <div className="card-body mx-auto">
                    <h2 className="card-title mx-auto">💧 Total Liters of Water </h2>
                    <p>75680.2 Liters</p>
                    
                </div>
            </div>
        </div>
    );
};

export default LiveStatistics;