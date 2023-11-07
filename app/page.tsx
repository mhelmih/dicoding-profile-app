import FeaturedProjects from "@/sections/FeaturedProjects";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import api from "./api";
import LastCta from "@/sections/LastCta";

const Home = async () => {
  const featuredProjects = await api.getFeaturedProjects();

  return (
    <main className="mt-24">
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Stats />
      <FeaturedProjects projects={featuredProjects.results} />
      <LastCta />
    </main>
  );
};

export default Home;
