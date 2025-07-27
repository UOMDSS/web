"use client";

import Section from "../section";

const Events = () => {
  return (
    <Section className="w-full min-h-[75vh] mb-8 px-2 md:px-0" id="events">
      <div className="mx-auto px-4 md:px-8 text-center">
        <h2 className="text-center md:text-3xl font-semibold text-gray-900 uppercase">
          Events & Workshops
        </h2>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-[800px]">
            <iframe
              src="https://lu.ma/embed/calendar/cal-HBDHlGq5qKDray1/events"
              width="100%"
              height="600"
              frameBorder="0"
              style={{
                border: '1px solid #bfcbda88',
                borderRadius: '8px',
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Events;
