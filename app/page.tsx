import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import MenuSection from "./components/MenuSection";
import Horaires from "./components/Horaires";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileCtaBar from "./components/MobileCtaBar";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <MenuSection />
      <Horaires />
      <Contact />
      <Footer />
      <MobileCtaBar />
    </>
  );
}
