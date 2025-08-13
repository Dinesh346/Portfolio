
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    projectDetails: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ fullName: '', mobile: '', email: '', projectDetails: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-white">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-8 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block font-medium mb-2 text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors duration-300 bg-gray-700 text-white border-gray-600 focus:border-gray-500"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block font-medium mb-2 text-white">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors duration-300 bg-gray-700 text-white border-gray-600 focus:border-gray-500"
                  placeholder="Your Mobile Number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2 text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors duration-300 bg-gray-700 text-white border-gray-600 focus:border-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="projectDetails" className="block font-medium mb-2 text-white">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors duration-300 resize-none bg-gray-700 text-white border-gray-600 focus:border-gray-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-white-500" />
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info + Follow Me */}
          <div className="space-y-8">
            {/* Get In Touch */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-400 to-teal-500 p-3 rounded-full ">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a
                      href="mailto:gurjardinesh8000@gmail.com"
                      className="hover:text-white transition-colors duration-300 text-gray-400"
                    >
                      gurjardinesh8000@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-400 to-teal-500 p-3 rounded-full ">
                    <Phone className="w-6 h-6 bg-blue-400 to-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <a
                      href="tel:+918955431568"
                      className="hover:text-white transition-colors duration-300 text-gray-400"
                    >
                      +91 8955431568
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-400 to-teal-500 p-3 rounded-full ">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <span className="text-gray-400">Available Worldwide</span>
                  </div>
                </div>
              </div>
            </div>


            {/* Follow Me */}
<div className="bg-gray-800 p-8 rounded-xl border border-gray-900">
  <h3 className="text-2xl font-bold mb-4 text-white">Follow Me</h3>

  <div className="grid grid-cols-3 gap-4">
    
    <a
      href="https://github.com/Dinesh346"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 bg-gray-900 rounded-lg 
                 transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 
                 group"
    >
      <Github className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-blue-400" />
    </a>

    <a
      href="https://www.linkedin.com/in/dineshcoderac/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 bg-gray-900 rounded-lg 
                 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 
                 group"
    >
      <Linkedin className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-white" />
    </a>

    <a
      href="https://instagram.com/_dinu_014"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 bg-gray-900 rounded-lg 
                 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-yellow-400 
                 group"
    >
      <Instagram className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-white" />
    </a>

  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
