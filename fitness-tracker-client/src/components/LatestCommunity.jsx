import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LatestCommunity = () => {
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['latestPosts'],
        queryFn: async () => {
            const { data } = await axios.get('https://fitverse-pearl.vercel.app/forums?limit=6');
            return data;
        }
    });

    if (isLoading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error loading posts</div>;

    return (
        <div className="p-4 sm:p-8 md:p-12 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20" />
            
            <motion.h2 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="zen-dots text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#1f2937] relative"
            >
                Latest Community Posts
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF640D] to-orange-500 rounded-full"></div>
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-11/12 mx-auto relative z-10 mt-16"
            >
                {posts?.map((forum, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        key={forum._id}
                        className="backdrop-blur-sm"
                    >
                        <Link 
                            to={`/forums/${forum._id}`}
                            className="block p-6 rounded-2xl bg-white/90 hover:shadow-[0_10px_40px_-15px_rgba(255,100,13,0.3)] transition-all duration-500 border border-orange-100 hover:-translate-y-2 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-[#FF640D] transition-colors duration-300 relative z-10">{forum.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 relative z-10">
                                {forum.content}
                            </p>
                            <div className="flex justify-between items-center text-sm border-t pt-4 border-orange-100 relative z-10">
                                <motion.span 
                                    whileHover={{ scale: 1.05 }}
                                    className="font-medium text-[#FF640D] px-3 py-1 rounded-full bg-orange-50"
                                >
                                    {forum.author}
                                </motion.span>
                                <motion.span 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-orange-50 px-3 py-1 rounded-full text-orange-600 shadow-sm"
                                >
                                    {new Date(forum.createdAt).toLocaleDateString()}
                                </motion.span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12"
            >
                <Link 
                    to="/forums"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF640D] to-orange-500 text-white rounded-full font-semibold hover:shadow-[0_10px_40px_-15px_rgba(255,100,13,0.5)] hover:scale-105 transition-all duration-500 relative overflow-hidden group"
                >
                    <span className="relative z-10">Explore All Community Posts →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#FF640D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
            </motion.div>
        </div>
    );
};

export default LatestCommunity;