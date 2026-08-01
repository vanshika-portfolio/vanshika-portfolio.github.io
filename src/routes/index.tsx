import { createFileRoute } from "@tanstack/react-router";

import { BackgroundStage } from "@/components/BackgroundStage";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";

import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Work } from "@/components/Work";
import { Education } from "@/components/Education";


import { Contact } from "@/components/Contact";


const title = "Vanshika Singla — Software & Data Engineer";
const description =
  "Software and data engineer in Vancouver. Ex-AWS, ESDC and BC Liquor Distribution. UBC Computer Science & Data Science, 4.33 GPA. Selected work in simulation, LLM systems and data pipelines.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <BackgroundStage />
      <SiteNav />
      <main>
        <Hero />
        <Experience />
        <Leadership />
        <Work />
        <Education />
      </main>
      <Contact />
    </>

  );
}
