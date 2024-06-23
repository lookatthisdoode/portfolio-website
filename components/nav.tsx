export default function Nav({ active }: { active: string }) {
  const links = [
    {
      name: "bio",
      link: "#bio",
    },
    {
      name: "projects",
      link: "#projects",
    },
    {
      name: "contact",
      link: "#contact",
    },
  ];

  return (
    <nav
      className={`absolute top-10 w-full items-center justify-center z-50 hidden md:flex`}
    >
      <div className="flex items-center justify-end gap-3 py-3 text-lg w-3/5 px-4">
        {active != "bio" && (
          <h1 className={`text-gray-500`}>Radchenko Andrei</h1>
        )}

        {links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.link}
              onClick={(e)=> {
                e.preventDefault();
                const el = document.querySelector(`${link.link}`)
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${link.name == active ? "text-gray-100" : "text-gray-500"}`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
