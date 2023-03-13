import conn from "../../lib/db";
// import path from "path";
// import fs from "fs";

// function extractData(filePath) {
//   const jsonData = fs.readFileSync(filePath);
//   const data = JSON.parse(jsonData);
//   return data;
// }

// function buildPath() {
//   return path.join(process.cwd(), "data", "data.json");
// }

export default async function handler(req, res) {
  const { method } = req;
  const { email, eventId } = req.body;

  // const filePath = buildPath();
  // const { events_categories, allEvents } = extractData(filePath);

  // try {
  //   // const result = await conn.query("select * from events where city_id = $1", [
  //   //   city_id,
  //   // ]);
  //   const query = "select * from events";
  //   const allEvents = await conn.query(query);
  //   // res.status(200).json(result);
  // } catch (error) {
  //   res.status(500).json({ error: "failed to load data" });
  // }

  // if (!allEvents) {
  //   return res.status(404).json({
  //     status: 404,
  //     message: "Events data not found",
  //   });
  // }

  if (method === "POST") {
    //add code here

    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email adress" });
    } else {
      try {
        const query = "select count(*) from reg_users where event_id = $1";
        const result = await conn.query(query, eventId);
        console.log(result);
        // const result = await conn.query("select count(*) from reg_users");
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ message: "failed to load data" });
      }
    }
    // const newAllEvents = allEvents.map((ev) => {
    //   if (ev.id === eventId) {
    //     if (ev.emails_registered.includes(email)) {
    //       res
    //         .status(409)
    //         .json({ message: "This email has already been registered" });

    //       return ev;
    //     }
    //   }
    // return {
    //   ...ev,
    //   emails_registered: [...ev.emails_registered, email],
    // };
    // return ev;
    // });

    // fs.writeFileSync(
    //   filePath,
    //   JSON.stringify({ events_categories, allEvents: newAllEvents })
    // );
    // res.status(200).json({
    //   message: `You has been registered successfully with
    //      the email: ${email} ${eventId}`,
    // });
  }
}
