import { languages } from "../data";
import SideContentTitle from "./SideContentTitle";

const Languages = () => {
  return (
    <section>
      <SideContentTitle title="Langues" />
      <ul className="mt-2 text-sm space-y-1">
        {languages.map(({ name, level }) => (
          <li key={name} className="flex justify-between">
            <span>{name}</span>
            <span className="italic">{level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
