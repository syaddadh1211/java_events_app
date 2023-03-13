import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>{pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city_id}/${ev.id}`}
            passHref
          >
            <Image width={250} height={150} src={ev.image_link} alt={ev.id} />
            <h3>Date of Event: </h3>
            <h3>{Date(ev.event_date)}</h3>
            <h4>Quota: {ev.quota}</h4>
            <h3>Title: {ev.title}</h3>

            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
