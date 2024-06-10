import { Link } from "react-router-dom";
const Servicespage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <section className="bg-[#E6F6FF] dark:bg-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Elevate Your Business with Our Software Services
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg md:text-xl">
              Unlock your full potential with our comprehensive software
              solutions tailored to your unique needs.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </section>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-start">
                <img className="w-10 h-10 mb-4 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Tailored solutions that solve your unique business challenges.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img className="w-10 h-10 mb-4 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold mb-2">
                  Mobile App Development
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Engage your customers with intuitive and responsive mobile
                  apps.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img className="w-10 h-10 mb-4 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold mb-2">Cloud Migration</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Seamlessly transition your infrastructure to the cloud for
                  scalability and reliability.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img className="w-10 h-10 mb-4 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold mb-2">DevOps Consulting</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Optimize your software delivery process with our DevOps
                  expertise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicespage;
