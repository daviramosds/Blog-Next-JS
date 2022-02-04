const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: String(process.env.NEXT_PUBLIC_NOTION_SECRET),
});

const databaseId = String(process.env.NEXT_PUBLIC_DATABASE_ID);

export default async (req, res) => {
  const payload = {
    path: `databases/${databaseId}/query`,
    method: "POST",
  };

  const { results } = await notion.request(payload);

  res.status(200).json(results);
};
