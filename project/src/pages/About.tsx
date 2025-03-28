import React from 'react';
import { motion } from 'framer-motion';
import { PenTool as Tool, Users, Star, History } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">About CarInspect Pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience in vehicle inspections, we've built a reputation
            for thorough, professional, and reliable car inspection services that our customers trust.
          </p>
        </motion.div>
      </section>

      {/* Company Stats */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Cars Inspected</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Expert Technicians</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <Tool className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-gray-600">
              Our team consists of certified professionals with extensive experience in vehicle inspection.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              We prioritize our customers' needs and provide transparent, honest service.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <Star className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              We maintain the highest standards in our inspection processes and service delivery.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <History className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            <p className="text-gray-600">
              Count on us for consistent, dependable service and accurate inspection reports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="relative h-[400px] bg-cover bg-center mb-16"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl max-w-2xl">
              We're always looking for talented and passionate individuals to join our team of automotive experts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;