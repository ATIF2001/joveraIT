import ramy from "../assets/about-us/ramy.webp";
import background from "../assets/about-us/bg.webp";

const Message = () => {
  return (
    <div className="flex justify-center items-center bg-black px-4 py-32">
      
      {/* Tilted Card */}
      <div className="relative max-w-7xl w-full text-white rounded-[28px] px-6 sm:px-8 md:px-16 py-16 md:py-20 transform md:-skew-x-6 overflow-visible">
        
        {/* Background Image – desktop only */}
        <div
          className="hidden md:block absolute inset-0 rounded-[28px] bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        {/* Counter skew */}
        <div className="relative transform md:skew-x-6 flex flex-col md:flex-row items-center" dir="ltr">
          
          {/* CEO Image */}
          <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 mb-8 md:mb-0 flex justify-center w-full md:w-auto">
            <img
              src={ramy}
              alt="CEO"
              className="max-w-[220px] sm:max-w-[280px] md:max-w-[420px] w-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full md:ml-auto md:w-[65%] text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              CEO Welcome Message
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose mb-4">
              As the CEO of Jovera Group, I'm thrilled to share the success of our journey in the UAE's real estate and
              financial, tourism, advertisement and accountancy sector. Our commitment to excellence and
              innovation has been the driving force behind our remarkable growth.
              
              In the ever-changing landscapes of real estate and finance, we pride ourselves on being a reliable,
              innovative, and integrity-driven beacon. Our professional team brings experience and fresh
              perspectives to provide tailored solutions that truly make a difference.
              Looking ahead, we are excited about the opportunities that await us. Our commitment is to enhance
              services, expand reach, and foster even stronger relationships with all of you.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Message;
