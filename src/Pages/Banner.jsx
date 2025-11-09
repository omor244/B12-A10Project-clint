import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="max-w-full h-[500px] mx-auto relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop
                className="h-full"
            >
                <SwiperSlide className="h-full relative">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1200px-24701-nature-natural-beauty.jpg"
                        alt="Snake Plant"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay content */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center    p-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Join a Challenge — Make an Impact
                        </h1>
                        
                        <Link  to={'challenges'} className='btn w-48'>Explore Challenges</Link> 

                    </div>
                </SwiperSlide>

                <SwiperSlide className="h-full relative">
                    <img
                        src="https://watermark.lovepik.com/photo/50017/2951.jpg_wh1200.jpg"
                        alt="Monstera"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center  p-10">
                        <h1 className="text-4xl md:text-5xl  font-bold text-white mb-4">
                            Build a Sustainable Future, Together
                         
                        </h1>
                        <p className="text-white font-medium mb-6 max-w-lg">
                            Connect with eco-minded people, share green tips, and see our community’s live environmental impact grow every day.
                        </p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-full relative">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_924+q_lossy+ret_img+to_webp/thegreenpagebd.com/wp-content/uploads/2019/12/5-2.jpg"
                        alt="Monstera"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-10 ip-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            EcoTrack — Where Sustainability Meets Technology
                        </h1>
                        <p className="text-white font-medium mb-6 max-w-md">
                            Join a digital movement to live smarter, cleaner, and greener.
                            From challenges to impact tracking — all in one place.
                        </p>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;