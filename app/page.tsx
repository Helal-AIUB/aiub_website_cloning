import HeroSlider from "../components/HeroSlider";
import ImportantLinks from "../components/ImportantLinks";
import FindProgramNotice from "../components/FindProgramNotice";
import NewsEvents from "../components/NewsEvents";
import Faculties from "../components/Faculties";
import DiscoverCampus from "../components/DiscoverCampus";
import TalentsSparked from "../components/TalentsSparked";

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
    </div>
  );
}
