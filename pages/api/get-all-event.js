import conn from "../../lib/db";

//Get All Event
export default async function handler(req, res) {
  try {
    const query = "select * from events";
    const result = await conn.query(query);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "failed to load data" });
  }
}
