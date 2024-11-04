interface Event {
  title: string;
  description: string;
  date: string;
  location?: string;
  type: string;
  registrationLink: string
}

const UpcomingEvents: Event[] = [
  {
    title: "Intro to Machine Learning",
    description: 
      `Join the Data Science Society (MUDS) for an introductory workshop 
      on key Machine Learning concepts like supervised and unsupervised 
      learning, linear and logistic regression. Perfect for beginners, it 
      includes hands-on practice with Python and NumPy for binary 
      classification. Meet the new MUDS committee, connect with fellow 
      students, and enjoy snacks and giveaways!`,
    registrationLink: "https://forms.gle/5KJEwvJFKiWeJ2KK6",
    date: "23rd October 2024",
    location: "Mansfield Cooper Building, Room G.22",
    type: "workshop",
  },
  {
    title: "From Human to Machine Perception",
    description: 
      `MUDS' inaugural AI Spotlight event, featuring cutting-edge
      presentations on computer vision. University researchers David Petrescu
      and Hamila Mailee will explore foundational concepts in computer graphics
      and advanced face-editing techniques for character animation. This event
      is ideal for students and researchers eager to dive into the latest 
      advancements in AI and machine perception.`,
    registrationLink: 'https://forms.gle/T4PbjvJBPM8i1trF6',
    date: "6th November 2024",
    location: "Kilburn Building Theatre 1.1",
    type: "spotlight",
  }
  // {
  //   title: "Event 3",
  //   description: "This is a description of event 3",
  //   date: "14th February 2024",
  //   location: "University of Manchester",
  //   type: "workshop",
  // },
];

export { UpcomingEvents };
