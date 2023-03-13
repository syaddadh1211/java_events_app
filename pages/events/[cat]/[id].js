import { SingleEvent } from "../../../src/components/events/single-event";
import axios from "axios";

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() {
  try {
    const events_categories = await axios.get(
      "//localhost:3000/api/get-all-city-event"
    );

    const allPaths = events_categories.data.rows.map((ev) => ({
      params: {
        cat: ev.city_id,
        id: ev.id,
      },
    }));

    return {
      paths: allPaths,
      fallback: false,
    };
  } catch {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  const id = context?.params.id;

  const allEvents = await axios.get("//localhost:3000/api/get-all-city-event/");
  const data = allEvents.data.rows.find((ev) => ev.id === id);

  return {
    props: { data },
  };
}
