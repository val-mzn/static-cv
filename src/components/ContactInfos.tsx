import { contactInfos } from "../data";
import SideContentTitle from "./SideContentTitle";

const ContactInfos = () => {
  return (
    <section className="">
      <SideContentTitle title="Contact" />
      <ul className="mt-2 text-sm space-y-1 font-mono">
        {contactInfos.map(({ icon: Icon, value }) => (
          <li key={value} className="flex items-start space-x-2">
            <Icon size={20} className="shrink-0 mt-0.5" />
            <span className="wrap-break-word">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactInfos;
