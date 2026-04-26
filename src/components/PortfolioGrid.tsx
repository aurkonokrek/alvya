const PortfolioGrid = () => {
  const works = [
    { title: "TRADITIONAL WORK", link: "/traditional-work" },
    { title: "DIGITAL WORK", link: "/digital-work" },
    { title: "ANIMATION WORK", link: "/animation-work" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work) => (
          <a key={work.title} href={work.link} className="group block cursor-pointer flex flex-col items-center">
            <div className="w-full aspect-[3/4] bg-[#2a2a2a] rounded-sm transition-transform duration-300 group-hover:-translate-y-2"></div>
            <h3 className="mt-8 font-serif text-[1.25rem] tracking-[0.1em] text-[#bf9049] text-center uppercase">
              {work.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
