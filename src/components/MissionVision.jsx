import illustration from "../assets/Illustration2.png";
const MissionVision = () => {
  return (
    <div>
      <section className="bg-white py-8">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-2 flex flex-col-reverse lg:flex-row items-center justify-center gap-4">
          {" "}
          {/* Reduced gap and margin */}
          <div className="lg:w-1/2 flex-grow-0">
            {" "}
            {/* Prevent vertical growth */}
            <img
              className="max-w-sm mx-auto lg:mx-4"
              alt="Illustration"
              src={illustration}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#504DCA]">
              Our Vision and Mission
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Discover our companys vision and mission.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {" "}
              {/* Reduced gap */}
              <div className="bg-[#EEF3FF] rounded-lg p-4 flex items-start gap-2">
                {" "}
                {/* Reduced padding and gap */}
                {/* <LightbulbIcon className="w-8 h-8 text-gray-800" /> */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    Focused on success, Our vision is to become the talent
                    partner of choice to every client whom we work with.
                  </p>
                </div>
              </div>
              <div className="bg-[#EEF3FF] rounded-lg p-4 flex items-start gap-2">
                {" "}
                {/* Reduced padding and gap */}
                {/* <TargetIcon className="w-8 h-8 text-gray-800" /> */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To offer our clients specialized talent fulfilment solutions
                    at every stage of development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
