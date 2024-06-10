import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

const Clients = () => {
  return (
    <div className="px-4 py-4 bg-[#E6F6FF] dark:bg-gray-950">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
        <img
          src={client1}
          width="100"
          height="50"
          alt="Client Logo"
          className="w-full max-w-[100px] object-contain"
        />
        <img
          src={client2}
          width="100"
          height="50"
          alt="Client Logo"
          className="w-full max-w-[100px] object-contain"
        />
        <img
          src={client3}
          width="100"
          height="50"
          alt="Client Logo"
          className="w-full max-w-[100px] object-contain"
        />
        <img
          src={client4}
          width="100"
          height="50"
          alt="Client Logo"
          className="w-full max-w-[100px] object-contain"
        />
        <img
          src={client5}
          width="100"
          height="50"
          alt="Client Logo"
          className="w-full max-w-[100px] object-contain"
        />
        <img
          src={client6}
          width="100"
          height="50"
          alt="Client Logo"
          className="w-full max-w-[100px] object-contain"
        />
      </div>
    </div>
  );
};

export default Clients;
