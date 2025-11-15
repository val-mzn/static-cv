import { header } from "../data";

export const Header = () => {
  return (
    <section>
      <p className="text-5xl font-bold text-header-name font-title">
        <span className="font-extrabold">{header.name.split(" ")[0]} </span>
        <span className="font-extralight">
          {header.name.split(" ")[1]}
        </span>
      </p>
      <p className="text-lg font-mono text-header-subname">{header.role}</p>
    </section>
  );
};

export default Header;