import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const TrainingPrograms = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-[#0F1413] text-white py-16 sm:py-20 md:py-24">
      <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="zen-dots text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FF640D] font-bold mb-4 tracking-tight">
            MEET OUR BEST PROGRAM
          </h2>
        </motion.div>

        {/* Training Programs Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8 sm:gap-10"
        >
          {/* Group Training */}
          <motion.div
            variants={itemVariants}
            className="relative group overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-[450px] sm:h-[550px] md:h-[650px]">
              <motion.img
                src="https://images.pexels.com/photos/6246671/pexels-photo-6246671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Group Training"
                className="w-full h-full object-cover brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                <motion.div 
                  className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 p-6 backdrop-blur-sm bg-black/20 rounded-2xl w-[85%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    GROUP TRAINING
                  </h3>
                  <p className="mb-6 sm:mb-8 max-w-md text-gray-200 text-base sm:text-lg leading-relaxed">
                    Join our energetic group sessions for motivation, community
                    support, and expert guidance.
                  </p>
                  <Link
                    to="/group-training"
                    className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-[#FF640D] transition-all duration-300 group/link"
                  >
                    Learn More{" "}
                    <BsArrowRight className="text-[#FF640D] transition-all duration-300 transform group-hover/link:translate-x-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Personal Training */}
          <motion.div
            variants={itemVariants}
            className="relative group overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-[450px] sm:h-[550px] md:h-[650px]">
              <motion.img
                src="https://images.pexels.com/photos/7991634/pexels-photo-7991634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g"
                alt="Personal Training"
                className="w-full h-full object-cover brightness-90 transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                <motion.div 
                  className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 p-6 backdrop-blur-sm bg-black/20 rounded-2xl w-[85%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    PERSONAL TRAINING
                  </h3>
                  <p className="mb-6 sm:mb-8 max-w-md text-gray-200 text-base sm:text-lg leading-relaxed">
                    Get customized workout plans and one-on-one attention from
                    our expert trainers.
                  </p>
                  <Link
                    to="/book-trainer"
                    className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-[#FF640D] transition-all duration-300 group/link"
                  >
                    Book A Demo{" "}
                    <BsArrowRight className="text-[#FF640D] transition-all duration-300 transform group-hover/link:translate-x-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainingPrograms;
