import aboutImage from "../assets/about-image.jpeg";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
const About = () => {
  return (
    <div>
      <main>
        <section className="py-20 bg-[#E6F6FF] dark:bg-gray-800">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  About SRITECH Software Services
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  SRITECH Software Services is a leading provider of innovative
                  software solutions. Our team of experienced developers and
                  designers are dedicated to delivering high-quality,
                  custom-tailored software that meets the unique needs of our cl
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  We specialize in a wide range of software development
                  services, including web application development, mobile app
                  development, and enterprise software solutions. Our focus on
                  cutting-edge technologies and agile methodologies
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 bg-black text-white">
                  Learn More
                </button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={aboutImage}
                  width="500"
                  height="500"
                  style={{ aspectRatio: 500 / 500, objectFit: "cover" }}
                  alt="About SRITECH"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 mb-4 text-primary"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Our team of experienced web developers create custom,
                  responsive websites and web applications that are tailored to
                  your business needs.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 bg-black text-white">
                  Learn More
                </button>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 mb-4 text-primary"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Our mobile app development team creates innovative,
                  user-friendly mobile applications for both iOS and Android
                  platforms.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 bg-black text-white">
                  Learn More
                </button>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 mb-4 text-primary"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Our enterprise software solutions are designed to streamline
                  business processes, improve efficiency, and drive growth for
                  your organization.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 bg-black text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#E6F6FF] dark:bg-gray-800">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img
                  src={team3}
                  width="120"
                  height="120"
                  style={{ aspectRatio: 120 / 120, objectFit: "cover" }}
                  alt="Team Member 1"
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img
                  src={team2}
                  width="120"
                  height="120"
                  style={{ aspectRatio: 120 / 120, objectFit: "cover" }}
                  alt="Team Member 2"
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img
                  src={team1}
                  width="120"
                  height="120"
                  style={{ aspectRatio: 120 / 120, objectFit: "cover" }}
                  alt="Team Member 3"
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
