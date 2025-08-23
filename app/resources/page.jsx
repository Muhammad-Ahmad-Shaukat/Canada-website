"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, FileText, Globe, Building, Target, BookOpen } from "lucide-react";
import Button from "../Components/Button/Button";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";

const ResourceCard = ({ title, description, url, icon: Icon, index }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-[#0a1e3b]/10 text-[#0a1e3b]">
            <Icon className="w-6 h-6" />
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#004D2E] transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-[#0a1e3b] mb-2 group-hover:text-[#004D2E] transition-colors">
          {title}
        </h3>

        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}

        <div className="flex items-center text-sm font-medium text-[#0a1e3b] group-hover:text-[#004D2E] transition-colors">
          Visit resource
          <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#0a1e3b] to-[#004D2E]"></div>
    </motion.a>
  );
};

export default function Resources() {
  const resourcesData = [
    {
      title: "Royal Commission for Jubail and Yanbu",
      description: "Jazan City for Primary and Downstream Industries",
      url: "https://www.rcjy.gov.sa/en-US/JCPDI",
      icon: Building,
    },
    {
      title: "Invest JCPDI",
      description: "Investment opportunities in Jazan City",
      url: "https://investjcpdi.com",
      icon: Target,
    },
    {
      title: "Saudi Vision 2030",
      description: "Programs and projects driving Saudi Arabia's future",
      url: "https://www.vision2030.gov.sa/v2030/vrps/",
      icon: BookOpen,
    },
    {
      title: "Ministry of Investment of Saudi Arabia",
      description: "Official investment authority of Saudi Arabia",
      url: "https://www.misa.gov.sa/en/",
      icon: Building,
    },
    {
      title: "Saudi Press Agency",
      description: "Latest economic news and updates from Saudi Arabia",
      url: "https://www.spa.gov.sa/",
      icon: FileText,
    },
    {
      title: "Global Affairs Canada",
      description: "Saudi Arabia relations and trade information",
      url: "https://www.international.gc.ca/country-pays/saudi_arabia-arabie_saoudite/relations.aspx",
      icon: Globe,
    },
  ];

  const additionalResources = [
    {
      title: "Canada-Saudi Business Council",
      description: "Facilitating trade and investment between Canada and Saudi Arabia",
      url: "#",
      icon: Building,
    },
    {
      title: "Export Development Canada",
      description: "Financial services for Canadian exporters and investors",
      url: "#",
      icon: FileText,
    },
    {
      title: "Trade Commissioner Service",
      description: "Canadian government support for international business",
      url: "#",
      icon: Globe,
    },
  ];

  return (
    <div className="resources-page">
      <div className="hero-section">
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Resources and references"
          breadcrum="Resources"
          mainheading="Key Links and Official References"

        />
      </div>
   

      <section id="resources" className="py-16 md:py-24 bg-gray-50 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0a1e3b]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            

            <h1 className="text-4xl md:text-5xl font-bold text-[#0a1e3b] mb-6">
              Key Links & Official  <span className="text-[#004D2E]">References</span> 
            </h1>

            <p className="text-lg text-gray-700">
              Access important resources, official portals, and references for doing business between Canada and Saudi Arabia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resourcesData.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                description={resource.description}
                url={resource.url}
                icon={resource.icon}
                index={index}
              />
            ))}
          </div>

          {/* Additional Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold text-[#0a1e3b] mb-4">
                Additional <span className="text-[#004D2E]">Canadian Resources</span>
              </h2>
              <p className="text-gray-700">
                Explore these Canadian resources to support your international business endeavors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  url={resource.url}
                  icon={resource.icon}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-[#0a1e3b] mb-4">Need More Specific Information?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our team can provide tailored resources and guidance for your specific sector and business needs.
            </p>

            <Button
              text="Contact our experts"
              link="/contact"
              backgroundColor="#0a1e3b"
              hoverColor="#004D2E"
              textColor="#fff"
              hoverTextColor="#D4AF37"
              borderColor="#0a1e3b"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              icon={<ArrowRight className="ml-2 w-5 h-5" />}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}