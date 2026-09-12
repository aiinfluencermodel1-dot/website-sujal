import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import ProblemSection from "@/components/home/ProblemSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceCategories from "@/components/home/ServiceCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LatestContent from "@/components/home/LatestContent";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ProblemSection />
      <ProcessSection />
      <ServiceCategories />
      <WhyChooseUs />
      <Testimonials />
      <LatestContent />
      <FAQSection />
      <CTASection />
    </main>
  );
}
