import { Team1, Team2, Team3, Vision1, Vision2, Vision3 } from "../../assets/images";

// About.ts - Data file
export interface MissionItem {
        id: string;
        number: string;
        title: string;
        description: string;
        icon: string;
      }
      
      export interface VisionItem {
        id: string;
        title: string;
        description: string;
        icon: string;
        image?: string;
      }
      
      export interface ServiceItem {
        id: string;
        number: string;
        title: string;
        description: string;
      }
      
      export interface Testimonial {
        id: string;
        quote: string;
        author: string;
        department: string;
        image: string;
      }
      
      export const missionData: MissionItem[] = [
        {
          id: '0',
          number: '01',
          title: 'What We Do',
          description: 'We deliver practical climate education and awareness programs in schools, workplaces, and communities across under-resourced regions.',
          icon: 'target'
        },
        {
          id: '1',
          number: '02',
          title: 'Why It Matters',
          description: 'Climate education equips people with the knowledge to understand the challenges they face and the skills to take meaningful action toward a sustainable future.',
          icon: 'building'
        },
        {
          id: '2',
          number: '03',
          title: 'How We Do It',
          description: 'We combine experiential learning and local engagement to turn climate awareness into practical, sustainable actions for everyday life.',
          icon: 'building'
        }
      ];
      
      export const visionData: VisionItem[] = [
        {
          id: '1',
          title: 'We Simplify Complexity',
          description: 'We turn climate science into clear, relatable lessons that people can easily understand and use in daily life.',
          icon: Vision1
        },
        {
          id: '2',
          title: 'We Create Space for Action',
          description: 'We design programs that focus on action, not just awareness, giving people tools to use right away.',
          icon: 'lightbulb',
          image: Vision2
        },
        {
          id: '3',
          title: 'We Stay Committed for Long',
          description: 'We provide ongoing support, materials, and guidance so that climate education becomes sustainable.',
          icon: 'users',
          image: Vision3
        }
      ];
      
      export const servicesData: ServiceItem[] = [
        {
          id: '1',
          number: '01',
          title: 'Climate School Workshops',
          description: 'We equip students and teachers with the fundamentals of climate science, sustainability, and eco-friendly practices through engaging, age-appropriate workshops and interactive sessions.'
        },
        {
          id: '2',
          number: '02',
          title: 'Community Tree-Planting',
          description: 'From rural villages to urban neighborhoods, we organize tree-planting events that not only restore green cover but also foster community spirit and environmental pride.'
        },
        {
          id: '3',
          number: '03',
          title: 'Virtual Talks & Events',
          description: 'Our digital events connect space and climate through live talks, visual storytelling, and satellite imagery to engage young audiences and online communities.'
        },
        {
          id: '4',
          number: '04',
          title: 'Workplace Sensitization Programs',
          description: 'We bring climate awareness into the workforce by partnering with companies to run climate education and sustainability training for employees.'
        }
      ];
      
      export const testimonialsData: Testimonial[] = [
        {
          id: '1',
          quote: 'When I step into a classroom or conference room, I see an opportunity. Not just for better habits, but for true leadership. Our outreach is a two-way conversation, with every person offering new ideas for climate action in their own lives.',
          author: 'Outreach Programs Unit',
          department: '',
          image: Team1
        },
        {
          id: '2',
          quote: 'Small choices, like switching to refillable markers in our training kits, point to something bigger. Climate action doesn\'t only happen out in the field. It shows up in our routines, in the small decisions we make every day, even at our desks.',
          author: 'Administrative Operations',
          department: '',
          image: Team2
        },
        {
          id: '3',
          quote: 'We don\'t define success by test scores. We look at how young students think, what they do, and how they influence others. Climate literacy should lead to action, and we use tools that track how learning turns into real-world change.',
          author: 'Climate Education Unit',
          department: '',
          image: Team3
        }
      ];
      
      export const aboutContent = {
        storyText: `Back in 2022, a group of educators, environmental scientists, and community organizers came together with a shared frustration. The climate crisis was growing more urgent, yet schools were not keeping pace. Climate science was often pushed to the margins, treated as an adult or corporate issue rather than everyone's urgent concern. That disconnect drove us to act. We believed that progress on climate would not come from technology or policy alone. It would also require a cultural shift, starting with how we educate the next generation. We launched Greenacy as a nonprofit with a focused goal: to put climate action at the heart of education around the world.`
      };