import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import WhyTappAV from "@/components/home/WhyTappAV";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HowItWorks from "@/components/home/HowItWorks";
import TappAVExperience from "@/components/home/TappAVExperience";
import CinemaExperience from "@/components/home/CinemaExperience";
import CustomerTestimonials from "@/components/home/CustomerTestimonials";
import HomeCinemaGuide from "@/components/home/HomeCinemaGuide";
import ConsultationBanner from "@/components/home/ConsultationBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <WhyTappAV />
      <FeaturedProducts />
      <HowItWorks />
      <TappAVExperience />
      <CinemaExperience />
      <CustomerTestimonials />
      <HomeCinemaGuide />
      <ConsultationBanner />
      <Footer />
    </main>
  );
}
