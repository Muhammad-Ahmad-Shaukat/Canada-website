'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { CheckCircle, ArrowRight, MapPin, TrendingUp, Users, Globe, Building2, Lightbulb, Anchor, Utensils, Mountain, Factory } from "lucide-react";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// ✅ Updated Counter Component
function Counter({ from = 0, to, duration = 2, suffix = "" }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.floor(latest));
  const [display, setDisplay] = useState(from);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Trigger when 50% of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      const unsub = rounded.on("change", v =>
        setDisplay(v.toLocaleString())
      );
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [isVisible, count, to, duration, rounded]);

  return <span ref={ref}>{display}{suffix}</span>;
}


export default function WhyJazan() {
  return (
    <>
      {/* Hero Section */}
      <ImageHeroSection
        imageSrc="/contact-us-skyline.avif"
        imageAlt="Why-Jazan Skyline"
        breadcrum="Why Jazan"
        mainheading="Limitless Potential. Unrivaled Opportunity."
        subheading="Jazan is rapidly emerging as a premier destination for strategic investment, innovation, and sustainable growth."
      />

      {/* Value Proposition Section */}
      <section className="bg-white text-[#0a1e3b] py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Jazan for Your Next Investment?
            </h2>
            <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl mx-auto">
              Significant public investment is modernizing infrastructure, utilities, housing, and logistics. For international investors, Jazan combines market access, industrial depth, and supportive regulation.
            </p>
          </motion.div>

          {/* Value Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#0a1e3b] p-3 rounded-full mb-4">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
              <p className="text-gray-600">
                Positioned on the Red Sea near major global shipping routes with access to international markets.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#0a1e3b] p-3 rounded-full mb-4">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Economic Growth</h3>
              <p className="text-gray-600">
                Home to one of the region's most ambitious industrial cities with significant public investment.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#0a1e3b] p-3 rounded-full mb-4">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skilled Workforce</h3>
              <p className="text-gray-600">
                Access to a growing talent pool supported by government training initiatives.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#0a1e3b] p-3 rounded-full mb-4">
                <Building2 className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Friendly</h3>
              <p className="text-gray-600">
                Up to 100% foreign ownership, profit repatriation, and competitive tax treatment.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#0a1e3b] text-white rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Jazan By The Numbers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 break-words leading-tight">
                  <Counter from={0} to={20} suffix="%+" duration={2} />
                </div>
                <p className="text-gray-300">Annual GDP Growth</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 break-words leading-tight">
                  <Counter from={0} to={5000000} suffix="+" duration={3} />
                </div>
                <p className="text-gray-300">Consumer Market Access</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 break-words leading-tight">
                  <Counter from={0} to={0} suffix="%" duration={2} />
                </div>
                <p className="text-gray-300">Corporate Tax (First 10 Years)</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 break-words leading-tight">
                  <Counter from={0} to={15} suffix="B+" duration={2.5} />
                </div>
                <p className="text-gray-300">Infrastructure Investment</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ... rest of your page stays the same ... */}

          {/* Sector Focus */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Investment Sectors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                    <Factory className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Energy & Petrochemicals</h4>
                </div>
                <p className="text-gray-600">
                  Leverage Jazan's strategic position in the energy sector with specialized industrial zones.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                    <Anchor className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Logistics & Trade</h4>
                </div>
                <p className="text-gray-600">
                  Gateway for international trade with state-of-the-art port facilities and expanding infrastructure.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                    <Utensils className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Food Processing</h4>
                </div>
                <p className="text-gray-600">
                  Strategic location for food processing with access to agricultural resources and export routes.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                    <Lightbulb className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Renewable Energy</h4>
                </div>
                <p className="text-gray-600">
                  Tap into abundant solar and wind resources with government incentives for green energy projects.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                    <Mountain className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Mining</h4>
                </div>
                <p className="text-gray-600">
                  Access to mineral resources with supportive regulations for extraction and processing industries.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-3 rounded-md mr-4">
                    <Globe className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Tourism</h4>
                </div>
                <p className="text-gray-600">
                  Developing tourism sector with pristine Red Sea coastline and unique cultural attractions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Investor Support Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Execution Confidence</h3>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
              Projects are overseen by the Royal Commission with dedicated investor support channels ensuring smooth implementation and operation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-6 bg-white rounded-xl">
                <CheckCircle className="w-12 h-12 text-[#0a1e3b] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">100% Foreign Ownership</h4>
                <p className="text-gray-600">In eligible activities with full profit repatriation</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <CheckCircle className="w-12 h-12 text-[#0a1e3b] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Regulatory Support</h4>
                <p className="text-gray-600">Streamlined processes and dedicated investor services</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <CheckCircle className="w-12 h-12 text-[#0a1e3b] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Tax Incentives</h4>
                <p className="text-gray-600">Competitive tax and customs treatment for qualified projects</p>
              </div>
            </div>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Official Resources</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="https://www.rcjy.gov.sa/en-US/JCPDI" target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <p className="font-medium text-[#0a1e3b]">Royal Commission for Jubail and Yanbu</p>
                <p className="text-sm text-gray-600">Jazan City for Primary and Downstream Industries</p>
              </a>
              <a href="https://investjcpdi.com" target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <p className="font-medium text-[#0a1e3b]">Invest JCPDI</p>
                <p className="text-sm text-gray-600">Official investment portal</p>
              </a>
              <a href="https://www.vision2030.gov.sa/v2030/vrps/" target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <p className="font-medium text-[#0a1e3b]">Saudi Vision 2030</p>
                <p className="text-sm text-gray-600">Programs and projects</p>
              </a>
              <a href="https://www.misa.gov.sa/en/" target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <p className="font-medium text-[#0a1e3b]">Ministry of Investment</p>
                <p className="text-sm text-gray-600">Official government investment authority</p>
              </a>
              <a href="https://www.international.gc.ca/country-pays/saudi_arabia-arabie_saoudite/relations.aspx" target="_blank" rel="noopener noreferrer" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <p className="font-medium text-[#0a1e3b]">Global Affairs Canada</p>
                <p className="text-sm text-gray-600">Canada and Saudi Arabia economic relations</p>
              </a>
            </div>
          </motion.div>

          {/* CTA Section */}
          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Explore Opportunities in Jazan?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our investment specialists are ready to provide customized information and support for your business expansion plans.
            </p>

            <Button
              text="Opportunities"
              link="/opportunities"
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
    </>
  );
}