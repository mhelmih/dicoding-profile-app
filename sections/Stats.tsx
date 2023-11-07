import api from "../app/api";

const stats = [
  {
    id: 1,
    name: "Working experiences (internships and part-times)",
    value: "3",
  },
  { id: 2, name: "Winning competition awards", value: "3" },
  {
    id: 3,
    name: "Web-related projects (from courseworks to competitions)",
    value: "10",
  },
];

const Stats = async () => {
  const stats = await api.getStats();

  return (
    <section className="mx-auto flex w-[90%] max-w-[90rem] flex-col justify-center pb-28 pt-20 md:flex-row md:pb-48">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-6">
            <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Stats;
