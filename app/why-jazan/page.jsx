'use client';

import React from "react";
import { CheckCircle, ArrowRight, MapPin, TrendingUp, Users, Globe, Building2, Lightbulb } from "lucide-react";
import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";
import Button from "../Components/Button/Button";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why Choose Jazan for Your Next Investment?
          </h2>
          <p className="text-lg md:text-xl mb-12 leading-relaxed text-center max-w-4xl mx-auto">
            With a strategic location, competitive business environment, and forward-looking vision, 
            Jazan offers investors a gateway to unprecedented growth opportunities.
          </p>

          {/* Value Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <MapPin className="text-[#0a1e3b] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
              <p className="text-gray-600">
                Positioned at the crossroads of major global trade routes with access to international markets.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <TrendingUp className="text-[#0a1e3b] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Economic Growth</h3>
              <p className="text-gray-600">
                Experience one of the region's fastest growing economies with strong GDP growth.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Users className="text-[#0a1e3b] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Skilled Workforce</h3>
              <p className="text-gray-600">
                Access a young, talented, and motivated workforce with competitive labor costs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <Building2 className="text-[#0a1e3b] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Business Friendly</h3>
              <p className="text-gray-600">
                Benefit from attractive incentives, streamlined regulations, and government support.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-[#0a1e3b] text-white rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Jazan By The Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">20%+</div>
                <p className="text-gray-300">Annual GDP Growth</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">5M+</div>
                <p className="text-gray-300">Consumer Market Access</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">0%</div>
                <p className="text-gray-300">Corporate Tax (First 10 Years)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">$15B+</div>
                <p className="text-gray-300">Infrastructure Investment</p>
              </div>
            </div>
          </div>

          {/* Sector Focus */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Investment Sectors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-2 rounded-md mr-4">
                    <Globe className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Logistics & Trade</h4>
                </div>
                <p className="text-gray-600">
                  Leverage Jazan's strategic position as a gateway for international trade with state-of-the-art port facilities.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-2 rounded-md mr-4">
                    <Lightbulb className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Renewable Energy</h4>
                </div>
                <p className="text-gray-600">
                  Tap into abundant solar and wind resources with government incentives for green energy projects.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0a1e3b] p-2 rounded-md mr-4">
                    <TrendingUp className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold">Advanced Manufacturing</h4>
                </div>
                <p className="text-gray-600">
                  Access specialized industrial zones with advanced infrastructure and supply chain advantages.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial/Quote Section */}
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
            <p className="text-xl md:text-2xl italic text-center mb-6">
              "Jazan offers one of the most compelling investment environments we've encountered globally. 
              The combination of strategic vision, infrastructure development, and business-friendly policies 
              creates exceptional opportunities for growth-oriented companies."
            </p>
            <div className="text-center">
              <p className="font-semibold">Ahmed Al-Soliman</p>
              <p className="text-gray-600">CEO, Middle East Investment Partners</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Explore Opportunities in Jazan?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our investment specialists are ready to provide customized information and support for your business expansion plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
              <Button
                text="Contact Our Team"
                link="/contact"
                backgroundColor="#0a1e3b"
                hoverColor="#004D2E"
                textColor="#fff"
                hoverTextColor="#D4AF37"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                icon={<ArrowRight className="ml-2 w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}