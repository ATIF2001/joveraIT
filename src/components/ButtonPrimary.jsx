import { Link } from "react-router-dom";

/* Common button classes */
const baseBtn =
  "inline-flex items-center justify-center h-12 px-6 text-sm font-semibold leading-none rounded-lg transition-all duration-300 ease-out";

/* =======================
   Primary Button (Action)
======================= */
export function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${baseBtn} text-white shadow-md hover:scale-105 hover:shadow-xl`}
      style={{
        background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
      }}
    >
      {children}
    </button>
  );
}

/* =======================
   Primary Button (Link)
======================= */
export function PrimaryButton2({ children, link }) {
  return (
    <Link to={link} className="inline-block">
      <span
        className={`${baseBtn} text-white shadow-md hover:scale-105 hover:shadow-xl`}
        style={{
          background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
        }}
      >
        {children}
      </span>
    </Link>
  );
}

/* =======================
   Secondary Button
======================= */
export function SecondaryButton({ children, link, onClick }) {
  const classes = `${baseBtn} border border-white text-white hover:bg-white hover:text-black hover:border-black`;

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
    </a>
  );
}
