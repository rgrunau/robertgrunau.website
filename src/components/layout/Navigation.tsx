import Link from "next/link";
const navLinks = [
  { route: "/work", title: "Work" },
  { route: "/blog", title: "Blog" },
  { route: "/about", title: "About" },
  { route: "/resume", title: "C.V" },
  { route: "/contact", title: "Contact" },
];

const Navigation = () => (
  <div className="flex items-center justify-center sm:justify-end px-2 mt-4 w-full">
    <nav className="w-full flex justify-center sm:justify-end items-center">
      <ul className="w-full flex flex-col justify-center items-center">
        {navLinks.map(({ route, title }) => (
          <li
            key={title}
            className="text-bg-white bg-dark w-4/5 text-4xl md:text-2xl my-2 py-2"
          >
            <Link href={route}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navigation;
