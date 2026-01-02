const PricingCard = ({
  lang,  
  title,
  subtitle,
  features,
  buttonText,
  onButtonClick,
}) => {
  const isEnglish = lang === "en";

  return (
    <div
      className={`
        group
        w-full
        max-w-md  /* increased width */
        rounded-2xl
        p-8
        bg-[#1B1B1B]
        text-white
        transition-all
        duration-500
        hover:bg-gradient-to-r
        hover:from-[#D7AA47]
        hover:to-[#715925]
      `}
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>

      {subtitle && (
        <p className="text-center text-lg mb-6">{subtitle}</p>
      )}

      {/* Features */}
      <ul className={`space-y-4 mb-8 ${isEnglish ? "text-left" : "text-right"}`}>
        {features.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 ${isEnglish ? "flex-row" : "flex-row-reverse"}`}
          >
            <span className="text-[#D7AA47] group-hover:text-white">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="
          w-full
          py-3
          rounded-lg
          font-semibold
          bg-[#1B1B1B]
          border
          border-[#D7AA47]
          text-[#D7AA47]
          transition-all
          duration-300
          hover:bg-[#D7AA47]
          hover:text-black
        "
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
