import React from "react";
import Image from "next/image";
import Link from "next/Link";

export const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city_id}/${ev.id}`}
            passHref
          >
            <Image width={250} height={150} src={ev.image_link} alt={ev.id} />
            <h3>{ev.title}</h3>

            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
