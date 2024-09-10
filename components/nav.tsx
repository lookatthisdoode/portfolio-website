import { roboto, robotoMono } from "@/app/ui/fonts";

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
    <nav>
      {/* PC */}
      <div
        className={`fixed z-[55] top-10 w-full items-center justify-center hidden md:flex ${robotoMono.className}`}
      >
        <div className="flex items-center justify-end gap-3 py-3 text-lg w-3/5 px-4 ">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.link}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(`${link.link}`);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${link.name == active ? "text-gray-100" : "text-gray-600"}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Nav*/}
      <div
        className={`w-full justify-between fixed top-0 md:hidden z-[55] p-5 md:p-5 flex gap-2 bg-gray-50 ${robotoMono.className}`}
      >
        {links.map((link, index) => {
          return (
            <a
              key={index + "mobile"}
              href={link.link}
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector(`${link.link}`);
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${link.name == active ? "text-gray-100 bg-backgroundLight" : "text-gray-500"} w-1/3 text-center`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
