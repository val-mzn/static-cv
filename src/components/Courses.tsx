import { courses } from "../data";
import SideContentTitle from "./SideContentTitle";

const Courses = () => {
  return (
    <section>
      <SideContentTitle title="Formations" />
      <ul className="mt-2 text-sm space-y-1">
        {courses.map(({ name, date }) => (
          <li key={name} className="flex justify-between">
            <span>{name}</span>
            <span className="italic">{date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Courses;
