import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import WhyTappAV from "@/components/home/WhyTappAV";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ConsultationBanner from "@/components/home/ConsultationBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <WhyTappAV />
      <FeaturedProducts />
      <ConsultationBanner />
      <Footer />
    </main>
  );
}
