function Project({ children, title, date, link }) {
  return (
    <a
      target="_blank"
      className="relative group flex flex-col justify-between w-17/18"
      href={link}
    >
      <h2 className="text-gray-300 font-semibold mb-5 uppercase">{title}</h2>
      <p>{children}</p>
      <p className="mt-5 italic">{date}</p>
      <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-gray-400 group-hover:w-full"></span>
    </a>
  );
}

export default Project;
