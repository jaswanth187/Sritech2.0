import heroimage from "../assets/Illustration1.png";
import backgroundImage from "../assets/background.png";
export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Welcome To Sritech Software Services
          </h1>
          <p className="text-lg text-gray-600">
            Collaboration, a tried-and-true process, and deep and long-lasting
            results
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={heroimage}
            alt="Illustration"
            className="max-w-sm mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
