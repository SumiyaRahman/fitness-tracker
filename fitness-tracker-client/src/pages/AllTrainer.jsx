import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
const AllTrainer = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("https://fitverse-pearl.vercel.app/trainers")
      .then((res) => res.json())
      .then((data) => setTrainers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Helmet>
        <title>Fitverse | All Trainers</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-4 py-12 bg-gradient-to-br from-orange-50 via-white to-orange-50 min-h-screen relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16 relative z-10"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="zen-dots text-4xl md:text-6xl font-bold text-center mb-6 text-[#383838] mt-32"
          >
            Our Expert Trainers
            <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-[#FF640D] to-orange-500 mx-auto mt-4 rounded-full"></div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Transform your fitness journey with our certified professionals
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/be-a-trainer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FF640D] to-orange-500 text-white px-8 py-3 rounded-xl font-semibold tracking-wide hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
              >
                Become a Trainer
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 w-11/12 mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-orange-100"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-80"
                >
                  <img
                    src={trainer.profileImage || trainer.image}
                    alt={trainer.name || trainer.fullName}
                    className="w-full h-full object-cover transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://i.ibb.co/MgsTCcv/avater.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>
              </div>

              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200 to-orange-100 rounded-bl-full opacity-20 transition-all duration-300 group-hover:scale-110" />

                <motion.h3
                  whileHover={{ color: "#FF640D" }}
                  className="text-2xl font-bold mb-6 text-gray-800 border-b border-orange-200 pb-3 transition-colors duration-300"
                >
                  {trainer.name || trainer.fullName}
                </motion.h3>

                <div className="space-y-4 mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 bg-white/90 p-3 rounded-xl shadow-sm backdrop-blur-sm"
                  >
                    <span className="font-semibold text-gray-700">Experience:</span>
                    <span className="text-[#FF640D] font-medium">{trainer.experience} years</span>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-3 bg-white/90 p-4 rounded-xl shadow-sm backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700">Available Slots:</span>
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className={`${
                          trainer.availableDays?.some(day => !day.isBooked) 
                            ? "bg-gradient-to-r from-orange-500 to-[#FF640D]" 
                            : "bg-gradient-to-r from-gray-500 to-gray-600"
                        } text-white px-4 py-1.5 rounded-full text-sm font-medium`}
                      >
                        {trainer.availableDays?.some(day => !day.isBooked) 
                          ? `${trainer.availableDays?.filter(day => !day.isBooked).length} Slots` 
                          : "Fully Booked"}
                      </motion.span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Skills:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {trainer.skills?.map((skill, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-orange-50 to-orange-100 text-[#FF640D] px-3 py-1 rounded-lg text-sm font-medium border border-orange-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="flex justify-center space-x-6 mb-8">
                  {[
                    { Icon: FaFacebook, link: trainer.socialLinks?.facebook || trainer.facebook },
                    { Icon: FaTwitter, link: trainer.socialLinks?.twitter || trainer.twitter },
                    { Icon: FaInstagram, link: trainer.socialLinks?.instagram || trainer.instagram }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.2, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.link}
                      className="text-gray-600 hover:text-[#FF640D] transition-colors duration-300"
                    >
                      <social.Icon size={24} />
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative z-10"
                >
                  <Link
                    to={`/trainer/${trainer._id}`}
                    className="block w-full text-center bg-gradient-to-r from-[#242424] to-[#3a3a3a] text-white px-6 py-4 rounded-xl hover:from-[#FF640D] hover:to-[#ff7a33] transition-all duration-500 font-semibold tracking-wide shadow-lg hover:shadow-xl"
                  >
                    Know More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AllTrainer;
