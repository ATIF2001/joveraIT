import { Link }  from "react-router-dom";
// Buttons

//Yellow Button
export function PrimaryButton({ children, link }) {
  return (
    <button
      onClick={link}
      className="px-5 py-2 rounded-lg font-semibold text-white transition-transform duration-300 ease-out shadow-md hover:scale-105 hover:shadow-xl"
      style={{
        borderRadius: "12px",
        background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
      }}
    >
      {children}
    </button>
  );
}

//Yellow Button link
export function PrimaryButton2({ children, link }) {
  return (
    <Link to={link}>
    <button
      className="px-5 py-2 rounded-lg font-semibold text-white transition-transform duration-300 ease-out shadow-md hover:scale-105 hover:shadow-xl"
      style={{
        borderRadius: "12px",
        background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
      }}
    >
      {children}
      {/* <a href={link}>{children}</a> */}
    </button>
    </Link>
  );
}












// Secondary Button
export function SecondaryButton({ children, link, onClick }) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="
        inline-flex items-center justify-center
        px-5 py-2
        rounded-lg
        font-semibold
        border border-white
        text-white
        transition-all duration-300 ease-out
        hover:bg-white
        hover:text-black
        hover:border-black
      "
      >
        {children}
      </button>
    );
  }
 
 
 
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        px-5 py-2
        rounded-lg
        font-semibold
        border border-white
        text-white
        transition-all duration-300 ease-out
        hover:bg-white
        hover:text-black
        hover:border-black
      "
      style={{ borderRadius: "12px" }}
    >
      {children}
    </a>
  );
}

