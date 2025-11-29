import CallToAction from "@/components/home/CallToAction";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import PopularProducts from "@/components/home/PopularProducts";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";
import bgImageBottom from "@/assets/images/bg-btm.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Contact />
      <PopularProducts />
      <CallToAction />
      <Categories />
      <Testimonials />

      <Image
        className="h-svh w-full object-cover fixed top-0 left-0 -z-50"
        src={bgImageBottom}
        alt="Background"
        width={1200}
        height={900}
      />
      <Link
        href="#home"
        className="text-xl fixed bottom-5 right-5 bg-primary border border-secondary text-white rounded-xl h-10 w-10 flex items-center justify-center transition z-10"
      >
        <FaArrowUp />
      </Link>
    </main>
  );
};

export default Home;
