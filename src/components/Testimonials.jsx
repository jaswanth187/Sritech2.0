import bob from "../assets/bob.jpg";
import narendra from "../assets/narendra.png";
import sarawathi from "../assets/sarawathi.png";

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center  bg-white dark:bg-gray-900">
      {" "}
      {/* Set a specific height */}
      <section className="w-full py-8 max-h-[400px] overflow-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Hear from our satisfied customers and see how we helped them
              achieve their goals.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            <div className="group relative overflow-hidden rounded-lg border bg-[#EEF3FF] shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={narendra}
                    alt="Rounded avatar"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">John Doe</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      CEO, Acme Inc.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  The platform has been a game-changer for our team. It helped
                  us streamline our workflow and focus on building amazing
                  products.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-[#EEF3FF] shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={sarawathi}
                    alt="Rounded avatar"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Jane Doe</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      CTO, Acme Inc.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  The platforms built-in collaboration tools have made it easier
                  for our team to work together and deliver projects on time.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-[#EEF3FF] shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={bob}
                    alt="Rounded avatar"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Bob Smith</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Product Manager, Acme Inc.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  The platforms deployment and scaling capabilities have allowed
                  us to focus on building great products without worrying about
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
