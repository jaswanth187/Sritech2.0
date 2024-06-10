import { Link } from "react-router-dom";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Socials = () => {
  return (
    <div>
      <section className="w-full py-8 bg-[#E6F6FF]">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Connect with us on social media
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Follow us on these platforms to stay up-to-date with our latest
              news and updates.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-[#1877f2] text-white rounded-full p-3">
                <img src={facebook} className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">Facebook</span>
            </Link>
            <Link
              to="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-[#e1306c] text-white rounded-full p-3">
                <img src={instagram} className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </Link>
            <Link
              to="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-[#1d9bf0] text-white rounded-full p-3">
                <img src={twitter} className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </Link>
            <Link
              to="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-[#0a66c2] text-white rounded-full p-3">
                <img src={linkedin} className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
            <Link
              to="#"
              className="flex flex-col items-center gap-2"
              prefetch={false}
            >
              <div className="bg-[#25d366] text-white rounded-full p-3">
                <img src={whatsapp} className="h-8 w-8" />
              </div>
              <span className="text-sm font-medium">WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Socials;
