import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { ProfileIntro } from "@/components/sections/profile-intro";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <ProfileIntro />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
