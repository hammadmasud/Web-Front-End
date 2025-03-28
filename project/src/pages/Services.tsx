import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Car, FileCheck, Clock, ArrowRight, Shield, PenTool as Tool, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Pre-Purchase Inspection",
      description: "Comprehensive evaluation before buying a used car to ensure you make an informed decision.",
      price: "Rs 5000",
      features: [
        "150+ point inspection",
        "Detailed condition report",
        "Test drive assessment",
        "Market value analysis"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Maintenance Inspection",
      description: "Regular maintenance checks to keep your vehicle in optimal condition.",
      price: "Rs 3000",
      features: [
        "Engine diagnostics",
        "Fluid level checks",
        "Brake system inspection",
        "Safety systems check"
      ]
    },
    {
      icon: <FileCheck className="h-12 w-12 text-blue-600" />,
      title: "Insurance Inspection",
      description: "Detailed inspection reports for insurance purposes.",
      price: "Rs 3000",
      features: [
        "Documentation photos",
        "Condition assessment",
        "Safety compliance check",
        "Value estimation"
      ]
    },
    {
      icon: <Gauge className="h-12 w-12 text-blue-600" />,
      title: "Performance Testing",
      description: "Comprehensive performance evaluation and diagnostics.",
      price: "Rs 5000",
      features: [
        "Engine performance test",
        "Emissions testing",
        "Computer diagnostics",
        "Road test analysis"
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center mb-16"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional vehicle inspection services tailored to your needs.
              Trust our expert technicians for comprehensive evaluations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Inspection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600">
                Schedule a convenient time for your vehicle inspection.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspection</h3>
              <p className="text-gray-600">
                Our experts perform a thorough inspection of your vehicle.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Report</h3>
              <p className="text-gray-600">
                Receive a comprehensive report with our findings and recommendations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;