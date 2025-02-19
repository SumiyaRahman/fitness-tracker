import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axios.get('https://fitverse-pearl.vercel.app/reviews');
            return data;
        }
    });

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-[400px]">Loading...</div>;
    }

    return (
        <div className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF640D] to-orange-600 bg-clip-text text-transparent zen-dots">
                    What Our Members Say
                </h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-orange-100 dark:border-gray-700 hover:shadow-[0_20px_50px_rgba(255,100,13,0.2)] dark:hover:shadow-[0_20px_50px_rgba(255,100,13,0.1)] transition-all duration-500 transform hover:-translate-y-2 h-full">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF640D] to-orange-400 rounded-full blur-lg opacity-50"></div>
                                        <img 
                                            src={review.userImage} 
                                            alt={review.userName}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl relative z-10"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-800 dark:text-white">{review.userName}</h3>
                                        <p className="text-[#FF640D] font-medium">Reviewed {review.trainerName}</p>
                                        <div className="flex text-yellow-400 mt-2 space-x-1">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="text-xl">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed">&ldquo;{review.review}&rdquo;</p>
                                <p className="text-sm text-gray-400 dark:text-gray-500 mt-6 font-medium">
                                    {new Date(review.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials; 