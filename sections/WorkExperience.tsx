const workExperience = [
  {
    date: "January 2023 - Present",
    company: "Institut Teknologi Bandung",
    position: "Software Engineering Lab Assistant",
    description:
      "Assist five groups of 4-5 students in developing software engineering documentation, including software requirement specification, software design specification, and software implementation testing results, during weekly assignments on the Software Engineering course Institut Teknologi Bandung.",
  },
  {
    date: "June 2023 - August 2023",
    company: "PotatoBeans Co.",
    position: "Fullstack Engineer Intern",
    description:
      "Create Discord notifier for code review in Jetbrains Upsource using Golang. Create email accounts management API using Golang and Mariadb.",
  },
  {
    date: "September 2021 - December 2021",
    company: "Comlabs-USDI ITB",
    position: "Computer Lab Assistant",
    description:
      "Assist over 70+ students in solving problems using Python during weekly lab on the Introduction of Computation course Institut Teknologi Bandung.",
  },
];

const WorkExperience = () => {
  // useEffect(() => {
  //   con
  // }, []);

  return (
    <section className="mx-auto flex w-[90%] max-w-[90rem] flex-col items-start pb-28 pt-20 md:flex-row md:pb-48">
      <div className="sticky mb-12 w-fit md:top-36 md:mb-0 md:w-[20%] lg:w-1/3">
        <h2 className="text-3xl font-medium md:text-4xl lg:text-6xl">
          Work Experience
        </h2>
      </div>
      <div className="sticky lg:w-2/3">
        {/* vertical line */}
        <div className="w-full before:absolute before:left-[40%] before:h-full before:w-[4px] before:bg-gray-300 after:clear-both after:table lg:before:left-[33%]">
          {workExperience.map((work, index) => (
            <div className="clear-both" key={index}>
              {/* green bullet */}
              <div className="relative float-left w-[40%] pr-6 text-right before:absolute before:-right-[9px] before:top-[15%] before:z-10 before:h-[14px] before:w-[14px] before:rounded-[100%] before:border-[4px] before:border-primary-40 before:bg-white lg:w-[33%] lg:pr-10">
                <p className="mb-3 text-primary-40 md:text-lg lg:text-xl ">
                  {work.company}
                </p>
                <p className="text-sm font-light">{work.date}</p>
              </div>
              <div className="float-right w-[60%] pl-8 lg:w-[66%] lg:pl-12">
                <p className="mb-3 text-lg font-medium md:text-xl lg:text-2xl">
                  {work.position}
                </p>
                <p className="mb-8 font-light text-gray-500 md:mb-16 md:font-normal">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
