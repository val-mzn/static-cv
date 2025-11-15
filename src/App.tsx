import {
  AboutMe,
  ContactInfos,
  Courses,
  Educations,
  Experiences,
  Header,
  Languages,
  Profile,
  Projects,
  Skills,
} from "./components";
import { PrintButton } from "./components/PrintButton";

export const App = () => {
  return (
    <div className="min-h-screen min-w-(--print-width) bg-gray-100 flex items-center justify-center p-4">
      <div id="cv-content" className="h-(--print-height) min-w-(--print-width) w-(--print-width) grid grid-cols-[1fr_2fr]">
        
        <div className="from-sidebar-from to-sidebar-to bg-linear-to-b p-4 text-sidebar-foreground space-y-6 overflow-hidden">
          <Profile />
          <ContactInfos />
          <Skills />
          <Educations />
          <Courses />
          <Languages />
        </div>

        <div className="from-main-from to-main-to bg-linear-to-b p-4 text-slate-700 space-y-6 pt-8">
          <Header />
          <AboutMe />
          <Experiences />
          <Projects />
        </div>
      </div>

      <PrintButton className="absolute bottom-4 right-4" />
    </div>
  );
};
export default App;
