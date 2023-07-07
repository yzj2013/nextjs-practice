import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CatEvent = ({ data, pageName }) => {
  return (
    <div className='cat_events'>
      <h1>Events in {pageName} </h1>

      <div className='content'>
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref={true}
          >
            <a className='card'>
              <Image
                src={ev.image}
                alt={ev.title}
                width={300}
                height={300}
              ></Image>
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
