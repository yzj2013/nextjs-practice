import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AllEvents = ({ data }) => {
  return (
    <div className='events_page'>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className='card'>
            <Image
              src={ev.image}
              alt={ev.title}
              width={500}
              height={500}
            ></Image>
            <h2>{ev.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;

{
  /* <a href=''>
          {' '}
          <img />
          <h2> Events in London</h2>
        </a>
        <a href=''>
          {' '}
          <img />
          <h2> Events in San Francisco</h2>
        </a>
        <a href=''>
          {' '}
          <img />
          <h2> Events in Barcelona</h2>
        </a> */
}
