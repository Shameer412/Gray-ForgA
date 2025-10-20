import React from 'react';
import { FaAward, FaUsers, FaRocket, FaHandshake, FaGlobe, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
  const stats = [
    {
      icon: <FaAward className="text-blue-600" size={24} />,
      number: "15+",
      label: "Industry Awards",
      description: "Recognized for excellence in innovation"
    },
    {
      icon: <FaUsers className="text-green-600" size={24} />,
      number: "150+",
      label: "Team Members",
      description: "Expert developers & designers"
    },
    {
      icon: <FaRocket className="text-purple-600" size={24} />,
      number: "500+",
      label: "Projects Delivered",
      description: "Successful implementations"
    },
    {
      icon: <FaGlobe className="text-orange-600" size={24} />,
      number: "50+",
      label: "Countries Served",
      description: "Global client base"
    }
  ];

  const values = [
    {
      icon: <FaHandshake className="text-blue-500" size={20} />,
      title: "Partnership First",
      description: "We build long-term relationships, not just projects. Your success is our success."
    },
    {
      icon: <FaRocket className="text-green-500" size={20} />,
      title: "Innovation Driven",
      description: "Constantly pushing boundaries with cutting-edge technologies and methodologies."
    },
    {
      icon: <FaChartLine className="text-purple-500" size={20} />,
      title: "Results Oriented",
      description: "We measure success by the tangible business impact we deliver to our clients."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology",
      achievements: ["5 Founding Members", "First Office", "Initial Funding"]
    },
    {
      year: "2019",
      title: "Rapid Growth",
      description: "Expanded team and delivered 50+ successful projects",
      achievements: ["50+ Projects", "Team Growth", "New Services"]
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Opened international offices and served clients worldwide",
      achievements: ["3 New Offices", "Global Clients", "Award Recognition"]
    },
    {
      year: "2022",
      title: "Industry Leader",
      description: "Recognized as top software development agency",
      achievements: ["10+ Awards", "150+ Team", "500+ Projects"]
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      experience: "15+ years in tech",
      specialization: "Business Strategy & Innovation",
      achievement: "Forbes 30 Under 30"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      experience: "12+ years in development",
      specialization: "Cloud Architecture & AI",
      achievement: "Microsoft MVP Award"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Designer",
      experience: "10+ years in UX/UI",
      specialization: "Product Design & Research",
      achievement: "Design Award Winner"
    },
    {
      name: "Emily Davis",
      role: "Project Director",
      experience: "8+ years in management",
      specialization: "Agile Methodology",
      achievement: "PMP Certified"
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <FaAward className="text-blue-600 mr-2" size={16} />
            <span className="text-blue-700 font-medium text-sm">Our Story & Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Our Agency</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of innovators, developers, and strategists dedicated to 
            transforming businesses through cutting-edge software solutions. Since 2018, we've 
            been bridging the gap between technology and business success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="inline-flex p-3 bg-blue-50 rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Our Mission */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Mission & Vision</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h4>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses with innovative software solutions that drive growth, 
                  streamline operations, and create sustainable competitive advantages in the 
                  digital age.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
                <p className="text-gray-700 leading-relaxed">
                  To be the world's most trusted technology partner, known for delivering 
                  exceptional value and transforming industries through digital innovation.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4 mt-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h4>
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4 group cursor-pointer">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2">{value.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h3>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <FaRocket className="text-white" size={24} />
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Ready to Grow With Us?</h4>
                  <p className="text-blue-100 text-sm">Join our journey of innovation and success</p>
                </div>
              </div>
              <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
            <FaUsers className="text-green-600 mr-2" size={16} />
            <span className="text-green-700 font-medium text-sm">Leadership Team</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced professionals driving innovation and delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">{member.name}</h4>
              <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
              <div className="text-sm text-gray-600 mb-3">{member.experience}</div>
              <div className="text-sm text-gray-700 mb-4">{member.specialization}</div>
              <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium inline-block">
                {member.achievement}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join 500+ Successful Companies
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors transform hover:-translate-y-1">
              Start Your Project Today
            </button>
            <button className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">
              Meet Our Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;