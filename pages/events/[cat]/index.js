import { CatEvent } from "../../../src/components/events/catEvent";
import axios from "axios";

const EventsCatPage = ({ data, pageName }) => (
  <CatEvent data={data} pageName={pageName} />
);

export default EventsCatPage;

export async function getStaticPaths() {
  try {
    const events_categories = await axios.get(
      "//localhost:3000/api/get-events"
    );

    const allPaths = events_categories.data.rows.map((ev) => ({
      params: {
        cat: ev.city_id,
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
  const id = context?.params.cat;
  try {
    const allEvents = await axios.get(`//localhost:3000/api/get-all-event/`);

    const data = allEvents.data.rows.filter((ev) => ev.city_id === id);

    return {
      props: { data, pageName: id },
    };
  } catch {
    return {
      props: {},
    };
  }
}
