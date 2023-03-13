import { CatEvent } from "../../../src/components/events/catEvent";
import axios, { all } from "axios";

const EventsCatPage = ({ data, pageName }) => (
  <CatEvent data={data} pageName={pageName} />
);

export default EventsCatPage;

export async function getStaticPaths() {
  try {
    const events_categories = await axios.get(
      "//localhost:3000/api/get-all-city-event"
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
    const allEvents = await axios.get(
      "//localhost:3000/api/get-all-city-event/",
      {
        params: {
          cat: id,
        },
      }
    );
    const data = allEvents.data.rows.filter((ev) => ev.city_id === id);

    const data_json = await import("/data/data.json");
    const all_city = data_json.all_city;

    let city = all_city.find((ev) => ev.id_city === id);

    return {
      props: { data, pageName: city.other },
    };
  } catch {
    return {
      props: {},
    };
  }
}
