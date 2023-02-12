import React from "react";
import Image from "next/image";
import Link from "next/Link";

export const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <h3>{ev.title}</h3>
          <Image src={ev.image} width={300} height={300} alt={ev.id} />
        </Link>
      ))}
    </div>
  );
};
