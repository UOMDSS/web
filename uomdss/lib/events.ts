interface Event {
  title: string;
  description: string;
  date: string;
  location?: string;
  type: string;
}

const UpcomingEvents: Event[] = [
  // {
  //   title: "Event 1",
  //   description:
  //     "This is a description of event 1. Longer description to test the layout.",
  //   date: "1st February 2024",
  //   location: "University of Manchester",
  //   type: "workshop",
  // },
  // {
  //   title: "Event 2",
  //   description: "This is a description of event 2",
  //   date: "7th February 2024",
  //   location: "University of Manchester",
  //   type: "social",
  // },
  // {
  //   title: "Event 3",
  //   description: "This is a description of event 3",
  //   date: "14th February 2024",
  //   location: "University of Manchester",
  //   type: "workshop",
  // },
];

export { UpcomingEvents };
