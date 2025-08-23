"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Target,
  Zap,
  Clock,
  TrendingUp,
  Globe,
  BarChart3,
  Crown,
  MapPin,
  Users,
  Building2,
} from "lucide-react";
import Button from "../Components/Button/Button";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";

/* ---------------- Animated Number ---------------- */
const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
};

/* ---------------- Accordion Item ---------------- */
const AccordionItem = ({
  title,
  content,
  icon: Icon,
  isOpen,
  onClick,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-6 hover:shadow-md transition-all duration-300"
    >
      <button
        className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-[#0a1e3b]/10 to-[#004D2E]/10 text-[#0a1e3b]">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0a1e3b]">
            {title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-[#0a1e3b]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------------- Stat Card ---------------- */
const StatCard = ({ number, label, icon: Icon, index, suffix = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-center mb-6">
        <motion.div
          className="p-4 rounded-2xl bg-gradient-to-br from-[#0a1e3b]/10 to-[#004D2E]/10 text-[#0a1e3b] group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
      </div>
      <p className="text-4xl font-extrabold text-[#0a1e3b] mb-3 tracking-tight">
        <AnimatedNumber value={number} />
        {suffix}
      </p>
      <p className="text-gray-600 text-lg">{label}</p>
    </motion.div>
  );
};

/* ---------------- Main Page ---------------- */
export default function CanadianBusinesses() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordionData = [
    {
      title: "High Growth Sectors",
      content:
        "Energy, petrochemicals, logistics, tourism, agriculture, manufacturing, and renewables are backed by billion dollar government programs under Vision 2030.",
      icon: TrendingUp,
    },
    {
      title: "Government Backed Stability",
      content:
        "Large scale infrastructure and industrial projects in Jazan are managed by the Royal Commission, providing predictability, clear timelines, and streamlined investor support.",
      icon: BarChart3,
    },
    {
      title: "Competitive Entry Incentives",
      content:
        "Foreign investors can access 100 percent ownership in key sectors, repatriate profits freely, and benefit from significant tax and customs incentives.",
      icon: Target,
    },
    {
      title: "Proven International Demand",
      content:
        "European, Asian, and U.S. firms have already secured multi billion dollar deals in the Kingdom. Their presence signals market maturity and a reduced entry risk for Canadian firms.",
      icon: Globe,
    },
  ];

  const statsData = [
    {
      number: 100,
      label: "Foreign ownership allowed in key sectors",
      icon: Target,
      suffix: "%",
    },
    {
      number: 1000,
      label: "Billion+ investments through Vision 2030",
      icon: Zap,
      suffix: "+",
    },
    {
      number: 50,
      label: "Countries already invested in Saudi Arabia",
      icon: Globe,
      suffix: "+",
    },
    {
      number: 24,
      label: "Dedicated investor support",
      icon: Clock,
      suffix: "/7",
    },
  ];

  return (
    <div className="canadian-businesses-page">
      {/* Hero Section */}
      <div className="hero-section relative">
        <ImageHeroSection
          imageSrc="/contact-us-skyline.avif"
          imageAlt="Saudi Arabia and Canada business relationship"
          breadcrum="For Canadian Businesses"
          mainheading="Why Saudi Arabia Should Be Your Priority Market"
          overlayOpacity={0.75}
        />
      </div>

      <section
        id="for-canadian-businesses"
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#0a1e3b]/5 rounded-full -translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#004D2E]/5 rounded-full translate-x-1/2 blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1e3b] mb-8 leading-tight tracking-tight">
              Why Canadian Investors Should See Saudi Arabia as a{" "}
              <span className="text-[#004D2E] px-2 py-1 rounded-md">Priority Market</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              For decades, Canadian companies have defaulted to familiar markets
              when seeking international growth. Today, diversification is no
              longer just a strategy—it's a necessity. Saudi Arabia offers scale,
              speed, and certainty rarely found elsewhere.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                  index={index}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center max-w-3xl mx-auto mb-12">

              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3b] mb-4">
                What <span className="text-[#004D2E]">Investors Should Know</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Key advantages for Canadian businesses entering the Saudi market
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                  isOpen={openAccordion === index}
                  onClick={() =>
                    setOpenAccordion(openAccordion === index ? -1 : index)
                  }
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Perception Gap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-10 md:p-16 mb-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e3b]/5 to-[#004D2E]/5 -z-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0a1e3b]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">


              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3b] mb-8">
                The <span className="text-[#004D2E]">Perception Gap</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Despite these advantages, Saudi Arabia remains underrepresented
                in Canadian corporate strategies—largely due to outdated
                perceptions shaped by selective media coverage rather than
                realities on the ground.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Those who visit and engage in the market see a modernizing Saudi
                Arabia, driven by digital transformation, infrastructure
                expansion, and global trade integration.
              </p>
            </div>
          </motion.div>

          {/* Why Act Now */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20 text-center max-w-4xl mx-auto"
          >

            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3b] mb-8">
              Why <span className="text-[#004D2E]">Act Now</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              First movers gain the advantage—better contracts, stronger
              partnerships, and a foothold before competition intensifies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With the right partnerships, Canadian companies can join the next
              chapter of Saudi Arabia's economic transformation, capturing
              opportunities in engineering, clean tech, construction,
              agriculture, and advanced manufacturing.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-[#0a1e3b] to-[#003366] rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Decorative glow circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to Explore Saudi Arabia?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                Speak with our experts about your sector entry strategy and how to
                capitalize on the opportunities in Saudi Arabia.
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  text="Speak with SAUCAN about your sector entry plan"
                  link="/contact"
                  backgroundColor="#fff"
                  hoverColor="#D4AF37"
                  textColor="#0a1e3b"
                  hoverTextColor="#0a1e3b"
                  borderColor="#fff"
                  icon={<ArrowRight className="ml-2 w-5 h-5" />}
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}