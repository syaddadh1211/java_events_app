import conn from "../../lib/db";

//Get All Event
export default async function handler(req, res) {
  // const query = req.query;
  // const { city_id } = query;

  try {
    // const result = await conn.query("select * from events where city_id = $1", [
    //   city_id,
    // ]);
    const query = "select * from events";
    const result = await conn.query(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "failed to load data" });
  }
}
