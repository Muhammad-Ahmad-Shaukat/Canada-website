'use client';

import React, { useEffect, useState } from "react";
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

// ✅ Counter Component
function Counter({ from = 0, to, duration = 2, suffix = "" }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.floor(latest));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    const unsub = rounded.on("change", v =>
      setDisplay(v.toLocaleString()) // format numbers with commas
    );
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, duration]);

  return <span>{display}{suffix}</span>;
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
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Jazan By The Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <Counter from={0} to={20} suffix="%+" duration={2} />
                </div>
                <p className="text-gray-300">Annual GDP Growth</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <Counter from={0} to={5000000} suffix="+" duration={3} />
                </div>
                <p className="text-gray-300">Consumer Market Access</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <Counter from={0} to={0} suffix="%" duration={2} />
                </div>
                <p className="text-gray-300">Corporate Tax (First 10 Years)</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <Counter from={0} to={15} suffix="B+" duration={2.5} />
                </div>
                <p className="text-gray-300">Infrastructure Investment</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ... rest of your page stays the same ... */}
        </div>
      </section>
    </>
  );
}
