import { SectionContent } from "@/types/root";
import SectionContainer from "@/components/shared/SectionContainer";
import React from "react";
import ProjectList from "@/components/modules/Home/Projects/ProjectList";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const highlightProjectsSection: SectionContent = {
  headline: "Showcasing Our Digital Masterpieces",
  description:
    "Every project we undertake is a journey of innovation, problem-solving, and creative execution. Our portfolio showcases a selection of our most impactful works, demonstrating our ability to deliver results across various scales and complexities. From mobile apps that have transformed user experiences to enterprise solutions that have streamlined operations, these highlight projects are testaments to our technical prowess, creative vision, and commitment to client success. Explore how we've turned ambitious ideas into digital realities.",
};

const Projects = () => {
  return (
    <SectionContainer
      sectionTitle={
        <span>
          Showcasing Our
          <span className="text-primary">&nbsp;Digital Masterpieces</span>
        </span>
      }
      description={highlightProjectsSection.description}
      headingsContainer
      childrenContainer={false}
      ActionComponent={
        <Link href="/case-studies">
          <Button variant="secondary" size="lg" className="mb-5 md:mb-0">
            View All Projects
          </Button>
        </Link>
      }
    >
      <ProjectList />
    </SectionContainer>
  );
};

export default Projects;
