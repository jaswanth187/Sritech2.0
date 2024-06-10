import Clients from "./Clients";
import HeroSection from "./Herosection";
import MissionVision from "./MissionVision";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ConatactForm from "./ContactForm";
import Socials from "./Socials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MissionVision />
      <Services />
      <Testimonials />
      <Clients />
      <ConatactForm />
      <Socials />
    </div>
  );
};

export default Home;
