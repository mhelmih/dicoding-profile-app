import WorkExperience from "@/sections/WorkExperience";

const About = () => {
  return (
    <main className="mx-auto mt-24 max-w-[90rem]">
      <div className="mx-auto flex w-[90%] max-w-[90rem] flex-col gap-10 pb-28 md:pb-48">
        <h1 className="text-5xl font-medium md:text-8xl md:font-normal">
          About.
        </h1>
        <WorkExperience />
      </div>
    </main>
  );
};

export default About;
