import { skills } from "../data";
import SideContentTitle from "./SideContentTitle";

export const Skills = () => {
  return (
    <section>
      <SideContentTitle title="Compétences" />
      <ul className="flex flex-wrap gap-1.5 mt-2">
        {skills.map(({ technologies }) => (
          <>
            {technologies.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className={`flex items-center space-x-2 rounded-sm from-slate-500 to-slate-600 bg-linear-to-br px-2 py-1`}
              >
                {Icon && <Icon width={16} height={16} />}
                <span className="text-sm font-semibold">{name}</span>
              </li>
            ))}
          </>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
