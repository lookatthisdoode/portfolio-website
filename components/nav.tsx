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
        className={`absolute top-10 w-full items-center justify-center hidden md:flex ${robotoMono.className}`}
      >
        <div className="flex items-center justify-end gap-3 py-3 text-lg w-3/5 px-4 z-50">
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
        className={`w-full justify-between absolute top-0 md:hidden z-50 p-5 flex gap-2 ${robotoMono.className}`}
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
