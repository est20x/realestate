import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyAlanya from "./components/WhyAlanya";
import Benefits from "./components/Benefits";
import Lifestyle from "./components/Lifestyle";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <div className="self-stretch bg-white overflow-x-hidden">
        <div className="flex flex-col items-center self-stretch overflow-x-hidden">
          <Header />
          <Hero />
          <WhyAlanya />
          <Benefits />
          <Lifestyle />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}
