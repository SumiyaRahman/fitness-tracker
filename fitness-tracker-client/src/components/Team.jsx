import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Team = () => {
    const { data: trainers = [], isLoading } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const response = await axios.get('https://fitverse-pearl.vercel.app/trainers?limit=3');
            return response.data;
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div className="text-center mb-16">
                    <motion.h2 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-[#1f2937] zen-dots"
                    >
                        Meet Our Expert Trainers
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Transform your fitness journey with our certified professionals
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer._id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                <img 
                                    src={trainer.profileImage || trainer.image} 
                                    alt={trainer.fullName || trainer.name}
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 group-hover:text-[#FF640D] transition-colors duration-300">
                                    {trainer.fullName || trainer.name}
                                </h3>
                                <div className="space-y-2 mb-6">
                                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Specializations</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {(trainer.skills || trainer.expertise || []).map((skill, idx) => (
                                            <motion.span 
                                                key={idx}
                                                whileHover={{ scale: 1.05 }}
                                                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF640D] rounded-lg text-sm font-medium border border-orange-200 hover:border-orange-300 hover:shadow-sm transition-all duration-300"
                                            >
                                                <span className="mr-1">•</span>
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                    {trainer.bio}
                                </p>
                                <div className="pt-4 border-t border-orange-100">
                                    <Link to={`/trainer/${trainer._id}`} className="block w-full py-3 px-6 bg-gradient-to-r from-[#FF640D] to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:from-orange-500 hover:to-[#FF640D] text-center">
                                        Book a Session
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;