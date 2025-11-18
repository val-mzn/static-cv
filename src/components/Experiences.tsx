import { experiences } from "../data";
import MainContentTitle from "./MainContentTitle";

const Experiences = () => {
  return (
    <section>
      <MainContentTitle title="Expérience professionnelle" />
      {experiences.map(({ company, logo, positions }) => (
        <div key={company} className="mt-2">
          <div className="flex items-center space-x-2 mb-2">
            <img src={logo} alt={company} className="h-7 w-7 object-contain" />
            <p className="font-semibold text-lg">{company}</p>
          </div>
          {positions.map(({ title, period, details }) => (
            <div key={title} className="mb-4">
              <p className="font-semibold">
                {title} <span className="italic text-sm">({period})</span>
              </p>
              <ul className="list-disc list-inside mt-1 text-sm">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Experiences;
