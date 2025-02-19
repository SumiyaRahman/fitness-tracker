import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState('');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fitverse-pearl.vercel.app/newsletter/subscribe', formData);
      if (response.status === 201) {
        setStatus('Successfully subscribed to newsletter!');
        setFormData({ name: '', email: '' });
      }
    } catch (error) {
      setStatus('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="zen-dots text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            Join Our Fitness Community
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF640D] to-orange-500 rounded-full"></div>
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get exclusive workout tips, nutrition advice, and special offers delivered straight to your inbox
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto space-y-6 backdrop-blur-sm bg-white/80 p-8 sm:p-10 rounded-3xl shadow-xl border border-orange-100"
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="form-control"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-6 py-4 rounded-xl bg-white/90 border border-orange-200 focus:border-[#FF640D] focus:ring-2 focus:ring-[#FF640D] focus:ring-opacity-50 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400"
              required
            />
          </motion.div>

          <motion.div 
            className="form-control"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-xl bg-white/90 border border-orange-200 focus:border-[#FF640D] focus:ring-2 focus:ring-[#FF640D] focus:ring-opacity-50 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400"
              required
            />
          </motion.div>

          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#FF640D] to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Subscribe Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#FF640D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>

          {status && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center mt-4 px-4 py-3 rounded-lg ${
                status.includes('Failed') 
                  ? 'bg-red-50 text-red-500 border border-red-100' 
                  : 'bg-green-50 text-green-500 border border-green-100'
              }`}
            >
              {status}
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Newsletter;
