import React from 'react';

const HowWork = () => {
    return (
        <>
            <div className="card bg-[#1f2950] hover:scale-y-110 rounded ">
                <div className="card-body ">
                    <span className="text-xl bg-green-400 p-5 w-18 mx-auto text-center rounded-full font-bold">1</span>
                    <span className="text-xl  mx-auto text-center rounded-full font-bold">Join a Challenge 🌱</span>
                    <div className="space-y-3">
                        <p>Pick from a variety of eco-friendly challenges — from reducing plastic use to saving energy — and start making a positive impact.</p>

                    </div>
                </div>
            </div>
            <div className="card bg-[#1f2950] hover:scale-y-110  rounded">
                <div className="card-body ">
                    <span className="text-xl bg-green-400 p-5 w-18 mx-auto text-center rounded-full font-bold">2</span>
                    <span className="text-xl  mx-auto text-center rounded-full font-bold">Track Your Progress 📊</span>
                    <div className="space-y-3">
                        <p>Monitor your achievements and see how much CO₂ you’ve saved, how many kilograms of plastic you’ve avoided, or how much water you’ve conserved.</p>

                    </div>
                </div>
            </div>
            <div className="card bg-[#1f2950] hover:scale-y-110 rounded ">
                <div className="card-body ">
                    <span className="text-xl bg-green-400 p-5 w-18 mx-auto text-center rounded-full font-bold">3</span>
                    <span className="text-xl  mx-auto text-center rounded-full font-bold">Share Tips & Inspire Others 💡</span>
                    <div className="space-y-3">
                        <p>Contribute your eco-friendly tips, ideas, and experiences to help the community adopt sustainable habits..</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default HowWork;