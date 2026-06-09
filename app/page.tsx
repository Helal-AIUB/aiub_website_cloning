import HeroSlider from "../components/HeroSlider";
import ImportantLinks from "../components/ImportantLinks";
import FindProgramNotice from "../components/FindProgramNotice";
import NewsEvents from "../components/NewsEvents";
import Faculties from "../components/Faculties";
import DiscoverCampus from "../components/DiscoverCampus";
import TalentsSparked from "../components/TalentsSparked";
import ApplyNow from "../components/ApplyNow";
import FactsFigures from "../components/FactsFigures";
import CampusLife from "../components/CampusLife";
import ResearchActivities from "../components/ResearchActivities";
import NotableAlumni from "../components/NotableAlumni";
import Partners from "../components/Partners";
export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSlider />

      <ImportantLinks />

      <FindProgramNotice />

      <NewsEvents />
      <Faculties />
      <DiscoverCampus />
      <TalentsSparked />
      <ApplyNow />
      <FactsFigures />
      <CampusLife />
      <ResearchActivities />
      <NotableAlumni />
      <Partners />
    </div>
  );
}
