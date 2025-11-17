import { projects } from "../data";
import MainContentTitle from "./MainContentTitle";

const Projects = () => {
  return (
    <section>
      <MainContentTitle title="Projets notables" />
      {projects.map(({ title, period, description }) => (
        <div key={title} className="mt-2">
          <p className="font-semibold">
            {title} <span className="italic text-sm">({period})</span>
          </p>
          <p className="text-sm text-justify mt-1">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
