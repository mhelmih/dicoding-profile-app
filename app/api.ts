const notionKey = process.env.NOTION_KEY;
const notionVersion = process.env.NOTION_VERSION;
const projectDatabaseId = process.env.PROJECT_DATABASE_ID;
const workDatabaseId = process.env.WORK_DATABASE_ID;

const getFeaturedProjects = async () => {
  return await fetch(
    `https://api.notion.com/v1/databases/${projectDatabaseId}/query`,
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: notionKey as string,
        "Notion-Version": notionVersion || "2022-06-28",
      },
      body: JSON.stringify({
        filter: {
          and: [
            {
              property: "Featured",
              checkbox: {
                equals: true,
              },
            },
            {
              property: "Published",
              checkbox: {
                equals: true,
              },
            },
          ],
        },
        sorts: [
          {
            property: "No",
            direction: "descending",
          },
        ],
      }),
    }
  ).then((res) => res.json());
};

const getStats = async () => {
  const get = async (url: string) => {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: notionKey as string,
        "Notion-Version": notionVersion || "2022-06-28",
      },
      body: JSON.stringify({
        filter: {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      }),
    }).then((res) => res.json());
  };

  const works = await get(
    `https://api.notion.com/v1/databases/${workDatabaseId}/query`
  );
  const projects = await get(
    `https://api.notion.com/v1/databases/${projectDatabaseId}/query`
  );

  const stats = [
    {
      id: 1,
      name: "Working experiences (internships and part-times)",
      value: works.results.length.toString(),
    },
    { id: 2, name: "Winning competition awards", value: "3" },
    {
      id: 3,
      name: "Web-related projects (from courseworks to competitions)",
      value: projects.results.length.toString(),
    },
  ];

  return stats;
};

const getWorkExperience = async () => {
  console.log("getWorkExperience");
  return await fetch(
    `https://api.notion.com/v1/databases/${projectDatabaseId}/query`,
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: notionKey as string,
        "Notion-Version": notionVersion || "2022-06-28",
      },
      body: JSON.stringify({
        filter: {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: "No",
            direction: "descending",
          },
        ],
      }),
    }
  ).then((res) => res.json());
};

const _ = { getFeaturedProjects, getStats, getWorkExperience };
export default _;
