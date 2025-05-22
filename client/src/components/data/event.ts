
export interface EventItem {
  id: number;
  image: string; // or StaticImageData if using Next.js
  date: string;
  location: string;
  time: string;
  title: string;
  description: string;
  link: string;
}

import { Eve, Eve1, Eve10, Eve2 ,Eve3,Eve4, Eve5, Eve6, Eve7, Eve8, Eve9, } from "../../assets/images";


export const events = [
  {
    id: 1,
    image: Eve,
    date: "Mar 28, 2025",
    location: "Virtual",
    time: "4PM",
    title: "Exposing the Climate Conspiracy",
    description: "Join Ava for Green Talks as she rips the cover off the climate conversation, unpacking what's real and what's manipulated.",
    link: "#",
  },
  {
    id: 2,
    image: Eve1,
    date: "Feb 19, 2025",
    location: "Accra",
    time: "6PM",
    title: "Eco Film Event",
    description: "Screening and discussion of climate documentaries and short films in schools and community centers to spark dialogue and learning.",
    link: "#",
  },
  {
    id: 3,
    image: Eve2,
    date: "Jan 09, 2025",
    location: "Hatboro",
    time: "9AM",
    title: "Water Watch Campaign",
    description: "Awareness and action on water conservation, clean water access, and protecting local water bodies through student-led initiatives.",
    link: "#",
  },
  {
    id: 4,
    image: Eve3,
    date: "Nov 22, 2024",
    location: "Accra",
    time: "10AM",
    title: "Green School Tour",
    description: "A series of visits to schools across Accra to conduct workshops, donate trees or books, and inspire climate leadership.",
    link: "#",
  },
  {
    id: 5,
    image: Eve4,
    date: "Sept 17, 2024",
    location: "Pittsburgh",
    time: "12PM",
    title: "Clean Campus Initiative",
    description: "Partner with campuses for a deep cleaning and greening campaign, introducing eco hygiene practices and environmental responsibility.",
    link: "#",
  },
  {
    id: 6,
    image: Eve5,
    date: "June 07, 2024",
    location: "Philadelphia",
    time: "8AM",
    title: "Green Tech Innovation",
    description: "A showcase of climate-smart innovations, gadgets, and ideas from students and local innovators solving environmental problems.",
    link: "#",
  },
  {
    id: 7,
    image: Eve6,
    date: "Mar 12, 2024",
    location: "Accra",
    time: "6PM",
    title: "EcoFest: Celebrate the Earth",
    description: "A community celebration with green exhibitions, music, eco-fashion shows, and games to promote environmental awareness in a fun, engaging way.",
    link: "#",
  },
  {
    id: 8,
    image: Eve7,
    date: "Jan 30, 2024",
    location: "Kumasi",
    time: "10AM",
    title: "Love Local, Live Green",
    description: "A campaign promoting local eco-businesses, eco-friendly local travel, and sustainable consumption in communities and schools.",
    link: "#",
  },
  {
    id: 9,
    image: Eve8,
    date: "Nov 08, 2023",
    location: "Pittsburgh",
    time: "7AM",
    title: "TreeVember: Plant, Protect, Preserve",
    description: "A tree-planting and tree-care campaign in schools and communities with a goal of planting native trees and fostering tree guardianship.",
    link: "#",
  },
  {
    id: 10,
    image: Eve9,
    date: "Oct 25, 2023",
    location: "Virtual",
    time: "9AM",
    title: "Climate Edu-Hackathon",
    description: "A virtual hackathon where teams of young innovators create tech-based solutions (apps, e-learning tools) to promote climate education.",
    link: "#",
  },
  {
    id: 11,
    image: Eve10,
    date: "Aug 19, 2023",
    location: "Accra",
    time: "9AM",
    title: "Plastic-Free Campus",
    description: "A campaign to eliminate single-use plastics from schools and introduce alternatives, coupled with awareness drives and clean-ups.",
    link: "#",
  },
  {
    id: 12,
    image: Eve,
    date: "Apr 3-9, 2025",
    location: "Hatboro",
    time: "5PM",
    title: "Sustainable Living Bootcamp",
    description: "A series of virtual and in-person workshops teaching practical green living skills like composting, sustainable diets, and energy conservation.",
    link: "#",
  },
  {
    id: 13,
    image: Eve3,
    date: "Feb 12, 2025",
    location: "Hatboro",
    time: "8AM",
    title: "Climate Advocacy & Policy",
    description: "Trainings and debates on climate policies and civic engagement, encouraging youth to write petitions and engage with local leaders.",
    link: "#",
  },
];
