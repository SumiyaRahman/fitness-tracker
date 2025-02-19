import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDumbbell, FaShower } from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';
import { IoFastFood } from 'react-icons/io5';  // Changed this import

const WhatWeOffer = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const features = [
        {
            icon: <GiGymBag className="w-16 h-16" />,
            title: "Expert Trainers",
            description: "Our certified trainers bring years of experience and personalized attention to help you achieve your fitness goals safely and effectively."
        },
        {
            icon: <FaDumbbell className="w-16 h-16" />,
            title: "Modern Equipment",
            description: "Access state-of-the-art fitness equipment and machines, regularly maintained to ensure your workout experience is both safe and effective."
        },
        {
            icon: <FaShower className="w-16 h-16" />,
            title: "Premium Facilities",
            description: "Enjoy clean, modern shower facilities and changing rooms equipped with lockers, making it convenient to fit workouts into your busy schedule."
        },
        {
            icon: <IoFastFood className="w-16 h-16" />,
            title: "Nutrition Guidance",
            description: "Receive expert nutrition advice and personalized meal plans to complement your fitness routine and maximize your results."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="bg-gradient-to-br from-white via-orange-50/30 to-white py-16 sm:py-20 lg:py-24 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 sm:mb-20 lg:mb-24"
                >
                    <motion.h3 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-[#FF640D] text-base sm:text-lg lg:text-base font-semibold mb-4 tracking-wider"
                    >
                        What We Offer
                    </motion.h3>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="zen-dots text-[#1f2937] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                    >
                        THE BEST STANDARDS ANYWHERE
                    </motion.h2>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                            }}
                            className="text-center p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100/50 hover:border-orange-200 transition-all duration-500"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="inline-block text-[#FF640D] mb-6 sm:mb-8 bg-orange-100/50 p-4 rounded-2xl"
                            >
                                {feature.icon}
                            </motion.div>
                            <motion.h3 
                                whileHover={{ color: "#FF640D" }}
                                transition={{ duration: 0.3 }}
                                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5"
                            >
                                {feature.title}
                            </motion.h3>
                            <motion.p 
                                className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg"
                            >
                                {feature.description}
                            </motion.p>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                className="mt-6 w-12 h-1 bg-gradient-to-r from-[#FF640D] to-orange-400 mx-auto rounded-full"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default WhatWeOffer;