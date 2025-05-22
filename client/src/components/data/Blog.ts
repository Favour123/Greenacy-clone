export interface Blog {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
}

import { Blog1, Blog2, Blog3 } from '../../assets/images';

export const blogs: Blog[] = [
  {
    id: 1,
    title: '10 Everyday Habits That Make You a More Sustainable Human',
    image: Blog1,
    date: '25 Mar',
    excerpt: `Living sustainably doesn't have to be complicated. It starts with small changes in your daily routine. These simple habits can reduce your impact on the planet and make you part...`,
    content: `Living sustainably doesn't have to be complicated. It starts with small changes in your daily routine. These simple habits can reduce your impact on the planet and make you part of a global movement for a greener future.\n\n1. Bring your own bags.\n2. Use a reusable water bottle.\n3. Turn off lights when not in use.\n4. Walk or bike for short trips.\n5. Eat more plant-based meals.\n6. Compost food scraps.\n7. Buy local produce.\n8. Repair instead of replace.\n9. Reduce single-use plastics.\n10. Share your knowledge with others.\n\nStart with one or two habits and build from there. Every small step counts!`
  },
  {
    id: 2,
    title: 'Empowering Teachers to Become Environmental Champions',
    image: Blog2,
    date: '19 Jan',
    excerpt: `When it comes to climate action, we often talk about policies, protests, and plastic bans. But there's one powerful group we sometimes overlook: teachers. These everyday heroes already shape the...`,
    content: `When it comes to climate action, we often talk about policies, protests, and plastic bans. But there's one powerful group we sometimes overlook: teachers. These everyday heroes already shape the minds of future leaders, so why not help them shape a greener future too?\n\nHere's the truth: teachers are one of our best bets for lasting environmental change. When they understand climate issues and know how to act, they pass that knowledge on to hundreds of students every year. That ripple effect is massive.\n\nSo how do we empower teachers to become environmental champions? Let's break it down.\n\n1. Make Environmental Education Easy to Teach\nMost teachers aren't climate scientists, and they don't need to be. What they need are practical resources, lesson plans, and support from their schools.\n\n2. Celebrate and Support Teacher Initiatives\nRecognize teachers who go above and beyond for the environment. Share their stories and give them a platform.\n\n3. Build a Community of Green Educators\nConnect teachers with each other so they can share ideas and inspiration.\n\nLet's give teachers the tools they need to inspire the next generation of environmental champions!`
  },
  {
    id: 3,
    title: 'How to Use Games and Activities to Make Sustainability Fun for Kids',
    image: Blog3,
    date: '08 Dec',
    excerpt: `Let's be honest: teaching kids about sustainability can feel like a chore. Words like "carbon footprint" and "waste management" don't exactly scream fun. But here's the good news, it doesn't...`,
    content: `Let's be honest: teaching kids about sustainability can feel like a chore. Words like "carbon footprint" and "waste management" don't exactly scream fun. But here's the good news, it doesn't have to be boring!\n\n1. Turn lessons into games.\n2. Use outdoor activities to connect with nature.\n3. Make recycling a team challenge.\n4. Create art from upcycled materials.\n5. Celebrate eco-friendly wins.\n\nWhen kids have fun, they learn more—and they're more likely to carry those lessons into adulthood. Let's make sustainability a game everyone wants to play!`
  }
];
