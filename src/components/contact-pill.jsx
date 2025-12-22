export function ContactPill({ icon: Icon, text, link }) {
  return (
    <a
      href={link}
      className="
        flex items-center justify-start gap-4
        w-full min-w-[250px] max-w-[520px]
        px-4 py-4
        bg-[#2f2f2f]
        rounded-2xl
        text-white font-semibold text-lg
        transition-all duration-300 ease-out
        hover:bg-white
        hover:text-black
        hover:shadow-xl
        hover:-translate-y-1
        group
      "
    >
      <Icon
        size={28}
        className="
          shrink-0
          text-white
          transition-colors duration-300
          group-hover:text-black
        "
      />

      <span className="flex-1 text-left">
        {text}
      </span>
    </a>
  );
}
