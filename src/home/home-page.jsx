import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((ev) => (
        <Link
          className="card"
          key={ev.city_id}
          href={`/events/${ev.city_id}`}
          passHref
        >
          <div className="image">
            <Image
              alt={ev.title}
              width={550}
              height={300}
              src={ev.image_link}
            />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
