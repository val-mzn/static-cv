import { educations } from "../data";
import SideContentTitle from "./SideContentTitle";

const Educations = () => {
  return (
    <section>
          <SideContentTitle title="Diplômes" />
          <ul className="mt-2 text-sm space-y-2">
            {educations.map(({ title, description, institution }) => (
              <li key={title} className="space-y-1">
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{description}</p>
                <p className="text-sm italic">{institution}</p>
              </li>
            ))}
          </ul>
        </section>
    );
};

export default Educations;