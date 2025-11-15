import { header } from "../data";
import MainContentTitle from "./MainContentTitle";

const AboutMe = () => {
  return (
    <section className="mt-4">
      <MainContentTitle title="À propos de moi" />
      <p className="mt-2 text-justify text-sm">{header.summary}</p>
    </section>
  );
};

export default AboutMe;
