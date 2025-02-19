import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axios.get('https://fitverse-pearl.vercel.app/reviews');
            return data;
        }
    });

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - 3 < 0 ? Math.max(reviews.length - 3, 0) : prevIndex - 3
        );
    };

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-[400px]">Loading...</div>;
    }

    return (
        <div className="bg-gradient-to-br from-orange-50 to-white py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 text-[#1f2937] zen-dots">
                    What Our Members Say
                </h2>
                
                <div className="relative">
                    <div className="flex gap-8 transition-all duration-700 ease-in-out transform">
                        {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
                            <div 
                                key={review._id} 
                                className="bg-white rounded-3xl p-10 shadow-2xl flex-1 border border-orange-100 hover:shadow-[0_20px_50px_rgba(255,100,13,0.2)] transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF640D] to-orange-400 rounded-full blur-lg opacity-50"></div>
                                        <img 
                                            src={review.userImage} 
                                            alt={review.userName}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-800">{review.userName}</h3>
                                        <p className="text-[#FF640D] font-medium">Reviewed {review.trainerName}</p>
                                        <div className="flex text-yellow-400 mt-2 space-x-1">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="text-xl">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic text-lg leading-relaxed">&ldquo;{review.review}&rdquo;</p>
                                <p className="text-sm text-gray-400 mt-6 font-medium">
                                    {new Date(review.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        ))}
                    </div>

                    {reviews.length > 3 && (
                        <>
                            <button 
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-4 rounded-full shadow-xl hover:bg-[#FF640D] hover:text-white transition-all duration-300 group"
                            >
                                <FaChevronLeft className="w-6 h-6 text-[#FF640D] group-hover:text-white transition-colors" />
                            </button>
                            <button 
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-4 rounded-full shadow-xl hover:bg-[#FF640D] hover:text-white transition-all duration-300 group"
                            >
                                <FaChevronRight className="w-6 h-6 text-[#FF640D] group-hover:text-white transition-colors" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;