import React, { useState } from 'react';
import { X, ExternalLink, Code, Smartphone, Monitor, Palette } from 'lucide-react';
import joveraCRM from "../assets/Services/DigitalDev/JOVERACRM (2).png";
import MAnoCrm from "../assets/Services/DigitalDev/manoCRM (2).png";
import JoveraWeb from "../assets/Services/DigitalDev/joveraGroupWeb.png";
import JoveraTourism from "../assets/Services/DigitalDev/joveraTourism.png";
import uiux1 from "../assets/Services/DigitalDev/uiux1.png";
import uiux2 from "../assets/Services/DigitalDev/uiux2.png";





const PortfolioProjects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = {
    web: [
      {
        id: 1,
        title: 'manoCRM',
        category: 'Tourism CRM Platform',
        tech: 'React • Node.js • MongoDB • Express',
        type: 'web',
        image: MAnoCrm,
        gradient: 'from-[#D7AA47] to-[#B88A34]',
        description: 'A specialized Tourism Customer Relationship Management (CRM) platform designed to streamline lead management, sales, and partnership operations for travel agencies and tourism businesses.',
        features: [
          'Lead Management: Capture, track, and nurture leads from multiple sources',
          'Package Selling: Create, customize, and sell tourism packages directly to leads',
          'Partner Management: Seamlessly manage partnerships with 100+ hotels across UAE',
          'Tourism Operations: Coordinate logistics for customer bookings and activities',
          'Analytics & Reporting: Track sales performance and partner performance'
        ],
        problems: [
          'Disorganized Lead Management - Centralizes all leads in one system',
          'Inefficient Package Selling - Automated pricing and booking confirmations',
          'Complex Hotel & Partner Coordination - Unified partner management dashboard',
          'Poor Customer Experience - Automated follow-ups ensure seamless experience',
          'Limited Performance Insights - Advanced analytics for data-driven decisions'
        ],
        impact: '100+ hotel partnerships across UAE',
        website: "https://crm.mano.ae"
      },
      {
        id: 2,
        title: 'Jovera CRM',
        category: 'All-in-One Business Management',
        tech: 'React • TypeScript • PostgreSQL • Redis',
        type: 'web',
        image: joveraCRM,
        gradient: 'from-gray-800 to-[#D7AA47]',
        description: 'A robust all-in-one sales, HR, and accounting management platform designed for businesses that rely on lead generation and agent performance.',
        features: [
          'Lead Management & Calling Module: Agents can call leads directly and log outcomes',
          'Performance Tracking: Monitor agent activity, calls, conversions, and commissions',
          'HR & Payroll Management: Track salaries, attendance, and manage payroll seamlessly',
          'Accounting & Financial Oversight: Track deals, revenue, and employee compensation',
          'Role-Based Access Control: Assign permissions for secure data access',
          'Analytics & Reporting: Real-time dashboards for comprehensive business insights'
        ],
        problems: [
          'Disorganized Lead Management - Centralized lead tracking system',
          'Lack of Agent Accountability - Real-time performance metrics dashboards',
          'Manual Payroll Calculations - Automated payroll and commission tracking',
          'Fragmented HR and Accounting - Integrated single source of truth',
          'Unauthorized Data Access - Role-based access control for security',
          'Limited Business Insights - Real-time analytics for data-driven management'
        ],
        impact: 'Complete business operations automation',
        website: "http://crm.jovera.ae"
      },
      {
        id: 3,
        title: 'Jovera Group Website',
        category: 'Dynamic Corporate Website',
        tech: 'React • Next.js • Tailwind • CRM Integration',
        type: 'web',
        image: JoveraWeb,
        gradient: 'from-[#D7AA47] to-gray-900',
        description: 'A fully dynamic and CRM-driven corporate website with pixel-perfect responsive design and real-time content management capabilities.',
        features: [
          'CRM-Driven Content: Update website components from CRM in real-time',
          'Responsive Design: Pixel-perfect experience on all devices',
          'CRM-Powered Career Page: Manage job openings and applications centrally',
          'Role-Based Access: Content management with security controls',
          'Scalable Architecture: Modular design that grows with the business',
          'Modern UI: Professional brand representation with dynamic data'
        ],
        problems: [
          'Static Content - Dynamic CRM-driven updates without developers',
          'Inconsistent Data - Synchronized information across platforms',
          'Poor Mobile Experience - Responsive design for all devices',
          'Inefficient Recruitment - Centralized candidate management workflow',
          'Limited Content Control - CRM-controlled components for flexibility',
          'Lack of Scalability - Modular architecture for seamless growth',
          'Weak Brand Image - Pixel-perfect UI reflecting professionalism'
        ],
        impact: 'Real-time website management without developer dependency',
        website: "https://www.jovera.ae/"
      }
    ],
    mobile: [
      {
        id: 4,
        title: 'Jovera Tourism',
        category: 'Travel Booking Platform',
        tech: 'Flutter • Firebase • Payment Gateway',
        type: 'mobile',
        image: JoveraTourism,
        gradient: 'from-black to-[#D7AA47]',
        description: 'A modern mobile-first travel booking platform that allows users to explore and book tour packages with ease, built with Flutter for iOS and Android.',
        features: [
          'Tour Package Booking: Browse and book curated tourism packages',
          'In-App Chat Support: Real-time chat with support agents',
          'Secure Online Payments: Integrated payment gateway with instant confirmation',
          'Cross-Platform: Single Flutter codebase for Android and iOS',
          'User-Friendly Experience: Clean interface with smooth animations',
          'Fast Performance: Optimized for mobile devices'
        ],
        problems: [
          'Complex Booking Process - Direct in-app booking eliminates phone calls',
          'Lack of Real-Time Support - In-app chat provides instant assistance',
          'Unsecure Payments - Integrated secure payment gateway',
          'Inconsistent Experience - Flutter ensures consistency across platforms',
          'Limited Accessibility - Mobile-first solution for on-the-go planning'
        ],
        impact: 'Seamless mobile booking experience',
        playStore: 'https://play.google.com/store/apps/details?id=com.joveragroup.tourism&hl=en',
        appStore: null
      }
    ],
    uiux: [
      {
        id: 5,
        title: 'Deltawy Accounting Program',
        category: 'Financial Software UI/UX',
        tech: 'Figma • Design System • User Research',
        type: 'uiux',
        image: uiux1,
        gradient: 'from-[#D7AA47] to-black',
        description: 'Comprehensive UI/UX design for an accounting program focused on user experience and financial data visualization.',
        features: [
          'Clean interface design for financial data',
          'Intuitive navigation system',
          'Data visualization components',
          'Responsive layouts',
          'Design system documentation'
        ],
        problems: [],
        impact: 'Enhanced user experience for accounting workflows',
        behance: 'https://www.behance.net/gallery/195587553/Deltawy-accounting-program/modules/1107127633'
      },
      {
        id: 6,
        title: 'Real Estate Landing Page',
        category: 'Property Website Design',
        tech: 'Figma • Prototyping • Visual Design',
        type: 'uiux',
        image: uiux2,
        gradient: 'from-gray-900 to-[#D7AA47]',
        description: 'Modern landing page design for real estate businesses focused on property showcase and lead generation.',
        features: [
          'Property showcase layouts',
          'Lead capture forms',
          'Interactive property filters',
          'Mobile-optimized design',
          'Call-to-action optimization'
        ],
        problems: [],
        impact: 'Conversion-focused real estate web presence',
        behance: 'https://www.behance.net/gallery/200363125/Real-state-Landing-Page/modules/1135830205'
      }
    ]
  };

  const allProjects = [...projects.web, ...projects.mobile, ...projects.uiux];

  const tabs = [
    { name: 'All', icon: Code },
    { name: 'Web', icon: Monitor },
    { name: 'Mobile', icon: Smartphone },
    { name: 'UI/UX', icon: Palette }
  ];

  const getFilteredProjects = () => {
    if (activeTab === 'All') return allProjects;
    if (activeTab === 'Web') return projects.web;
    if (activeTab === 'Mobile') return projects.mobile;
    if (activeTab === 'UI/UX') return projects.uiux;
    return allProjects;
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white px-6 md:px-16 lg:px-24 py-24 relative overflow-hidden">
      {/* Ambient background effects */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
             style={{ background: '#D7AA47', animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
             style={{ background: '#D7AA47', animationDuration: '10s', animationDelay: '2s' }} />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#D7AA47] to-white bg-clip-text text-transparent"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Selected Works
          </h2>
          <p className="text-gray-400 text-lg">
            Crafting digital experiences that solve real problems
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex gap-4 flex-wrap">
            {tabs.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`group relative px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2
                  ${activeTab === name
                    ? 'bg-[#D7AA47]/20 border-[#D7AA47] text-white'
                    : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{name}</span>
                {activeTab === name && (
                  <div className="absolute inset-0 rounded-full blur-xl" style={{ background: '#D7AA47', opacity: 0.1 }} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredProjects().map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-[#121212] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D7AA47]/50 transition-all duration-500 hover:scale-[1.02]" 
                   style={{ boxShadow: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(215, 170, 71, 0.15)'}
                   onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0  opacity-40 mix-blend-multiply`} />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium border border-gray-700">
                    {project.type.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-[#D7AA47] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4 font-mono">
                    {project.tech}
                  </p>

                  <div className="flex items-center gap-2 text-[#D7AA47] text-sm font-medium group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
          style={{
            animation: 'fadeIn 300ms ease-out'
          }}
        >
          <div
            className="bg-[#121212] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#121212]/95 backdrop-blur-xl border-b border-gray-800 p-6 flex items-start justify-between z-10">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400">{selectedProject.category}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-30 mix-blend-multiply`} />
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Tech Stack
                </h4>
                <p className="font-mono text-[#D7AA47]">{selectedProject.tech}</p>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Overview
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#D7AA47' }} />
                        <p className="text-gray-300 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problems Solved */}
              {selectedProject.problems && selectedProject.problems.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Problems Solved
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.problems.map((problem, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#D7AA47' }} />
                        <p className="text-gray-300 leading-relaxed">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact */}
              {selectedProject.impact && (
                <div className="border rounded-2xl p-6" style={{ borderColor: '#D7AA47', backgroundColor: 'rgba(215, 170, 71, 0.05)' }}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#D7AA47' }}>
                    Impact
                  </h4>
                  <p className="text-white font-medium text-lg">{selectedProject.impact}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap pt-4">
                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-black font-medium transition-all flex items-center gap-2"
                    style={{ background: '#D7AA47' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(215, 170, 71, 0.5)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.playStore && (
                  <a
                    href={selectedProject.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center gap-2"
                  >
                    Google Play
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.appStore && (
                  <a
                    href={selectedProject.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                  >
                    App Store
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.behance && (
                  <a
                    href={selectedProject.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                  >
                    View on Behance
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
};

export default PortfolioProjects;