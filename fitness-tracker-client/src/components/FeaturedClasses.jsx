import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedClasses = () => {
    const { data: featuredClasses = [], isLoading } = useQuery({
        queryKey: ['featuredClasses'],
        queryFn: async () => {
            const response = await axios.get('https://fitverse-pearl.vercel.app/classes');
            // Add random booking numbers to each class
            const classesWithBookings = response.data.map(classItem => ({
                ...classItem,
                totalBookings: Math.floor(Math.random() * 100) + 1 // Random number between 1-100
            }));
            return classesWithBookings;
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
        <div className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="zen-dots text-5xl font-bold mb-4 text-[#1f2937]"
                    >
                        Featured Classes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-base max-w-2xl mx-auto"
                    >
                        Discover our most popular fitness classes designed to transform your body and mind
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredClasses.slice(0, 6).map((classItem, index) => (
                        <motion.div
                            key={classItem._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 group"
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={classItem.image} 
                                    alt={classItem.name}
                                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                                    {classItem.totalBookings} Bookings
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors duration-300">{classItem.name}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">{classItem.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <motion.span 
                                        whileHover={{ scale: 1.05 }}
                                        className="text-orange-500 font-semibold flex items-center gap-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        {classItem.trainer}
                                    </motion.span>
                                    <Link to={`/classes/${classItem._id}`}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 font-semibold"
                                        >
                                            Learn More
                                        </motion.button>
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

export default FeaturedClasses;