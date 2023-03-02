import { AllEvents } from "../../src/components/events/events-page";
import axios from "axios";

const EventsPages = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPages;

export async function getStaticProps() {
  try {
    const response = await axios.get("//localhost:3000/api/get-events-cat");
    return {
      props: {
        data: response.data.rows,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
}
