import { AllEvents } from "../../src/components/events/events-page";

const EventsPages = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPages;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
