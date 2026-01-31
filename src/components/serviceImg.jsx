const ServiceImage = ({ img }) => {
  return (
    <div className="flex ">
      <div className="relative w-[380px] h-[260px]">
        
        {/* Corner Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-yellow-500/30 via-white-500/20 to-yellow-500/30 blur-2xl rounded-3xl"></div>

        {/* Image */}
        <img
          src={img}
          alt="Service"
          className="relative w-full h-full object-cover rounded-3xl border border-white/10 shadow-xl"
        />
      </div>
    </div>
  );
};

export default ServiceImage;