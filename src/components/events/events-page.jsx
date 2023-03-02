import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link
          className="card"
          key={ev.city_id}
          href={`/events/${ev.city_id}`}
          passHref
        >
          <h3>{ev.title}</h3>
          <Image
            src={ev.image_link}
            width={300}
            height={300}
            alt={ev.city_id}
          />
        </Link>
      ))}
    </div>
  );
};
