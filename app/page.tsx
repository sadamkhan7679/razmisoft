import CtaBanner from "@/components/shared/CtaBanner";
import HeroSection from "@/components/modules/Home/Hero";
import AboutUs from "@/components/modules/Home/AboutSection/AboutUs";
import TechStack from "@/components/modules/Home/TechStack";
import DevelopmentApproach from "@/components/modules/Home/DevelopmentApproach";
import Industries from "@/components/modules/Home/Industries";
import Projects from "@/components/modules/Home/Projects";
import TeamList from "@/components/modules/Home/Team";
import ClientsTestimonials from "@/components/modules/Home/ClientFeedbacks";

const PageSections = [
  // {
  //   id: "home",
  //   Component: Hero,
  // },
  {
    id: "hero",
    Component: HeroSection,
  },
  {
    id: "about",
    Component: AboutUs,
  },
  {
    id: "cta-banner",
    Component: CtaBanner,
  },
  // {
  //   id: "our-services",
  //   Component: OurServices,
  // },
  // {
  //   id: "services",
  //   Component: ServicesList,
  // },
  {
    id: "tech-stack",
    Component: TechStack,
  },
  // {
  //   id: "experience-timeline",
  //   Component: ExperienceTimeline,
  // },
  {
    id: "approach",
    Component: DevelopmentApproach,
  },
  {
    id: "industries",
    Component: Industries,
  },
  {
    id: "case-studies",
    Component: Projects,
  },
  {
    id: "team",
    Component: TeamList,
  },
  {
    id: "clients-testimonials",
    Component: ClientsTestimonials,
  },
  // {
  //   id: "key-highlights",
  //   Component: KeyHighlights,
  // },
  // {
  //   id: "contact",
  //   Component: () => <h1>CONTACT US</h1>,
  // },
  // {
  //   id: "footer",
  //   Component: Footer,
  // },
];

const Home = () => {
  return (
    <div
      // className="max-w-7xl w-full"
      className="w-full"
    >
      {PageSections.map(({ id, Component }) => (
        <div key={id} id={id} className="w-full">
          <Component />
        </div>
      ))}
    </div>
  );
};

export default Home;
