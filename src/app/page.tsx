import About from '@/components/about';
import HeroSection from '@/components/heroSection';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="text-primary">
      <HeroSection />
      <About />
      <Testimonials />
    </div>
  );
}
