import image1 from "../assets/servicecardimg1.png";
import image2 from "../assets/servicecardimg2.png";
import image3 from "../assets/servicecardimg3.png";
import image4 from "../assets/servicecardimg4.png";

const Services = () => {
  return (
    <div>
      <section className="bg-[#E6F6FF] py-8 md:py-16 dark:bg-gray-950">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#333333] dark:text-white sm:text-4xl md:text-5xl">
            Services
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 justify-center">
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <img
                src={image1}
                alt="Development"
                width={400}
                height={300}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-[#817D7D]">
                Development
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Building innovative solutions to drive your business forward.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <img
                src={image2}
                alt="Consulting"
                width={400}
                height={300}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-[#817D7D]">
                Consulting
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Expert advice to help you achieve your business goals.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <img
                src={image3}
                alt="EduTech"
                width={400}
                height={300}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-[#817D7D]">EduTech</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Empowering education with cutting-edge technology.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
              <img
                src={image4}
                alt="Support & Maintenance"
                width={400}
                height={300}
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-[#817D7D]">
                Support & Maintenance
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Reliable support to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
