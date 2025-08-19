import ImageHeroSection from "../Components/ImageHeroSection/ImageHeroSection";

export const metadata = {
  title: "Why Jazan is strategic for Canadian investors",
  description:
    "Red Sea access, modern infrastructure, and investor support make Jazan a high potential entry point for Canadian companies.",
};

export default function WhyJazan() {
  return (
    <>

      <ImageHeroSection
        imageSrc="/contact-us-skyline.avif"
        imageAlt="Contact Us Skyline"
        breadcrum="Contact Us"
        mainheading="Let’s start the conversation"
      />
    </>
  );
}