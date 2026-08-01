import { createFileRoute } from "@tanstack/react-router";
import { SceneProvider } from "@/components/scene-context";
import { BackgroundStage } from "@/components/BackgroundStage";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Work } from "@/components/Work";
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
    <SceneProvider>
      <BackgroundStage />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Experience />
        <Leadership />
        <Work />

      </main>
      <Contact />
    </SceneProvider>
  );
}
