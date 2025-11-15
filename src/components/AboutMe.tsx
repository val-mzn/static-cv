import { header } from "../data";
import MainContentTitle from "./MainContentTitle";

const AboutMe = () => {
  
  const age = header.birthDate
    ? Math.floor(
        (new Date().getTime() - header.birthDate.getTime()) /
          (1000 * 60 * 60 * 24 * 365.25)
      )
    : null;

  return (
    <section className="mt-4">
      <MainContentTitle title="À propos de moi" />
      <p className="mt-2 text-justify text-sm">
        {header.summary.replace("${age}", age?.toString() ?? "")}
      </p>
    </section>
  );
};

export default AboutMe;
