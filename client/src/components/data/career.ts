// career.ts

export interface CareerData {
        jobType: string;
        workMode: string;
        location: string;
        monthlyPay: string;
        intro: string;
        responsibilities: string[];
        eligibility: string[];
        benefits: string[];
        deadline: string;
        status: "open" | "closed";
      }
      
      export const careerData: CareerData = {
        jobType: "Full time",
        workMode: "Remote-first",
        location: "Nigeria",
        monthlyPay: "$350 – $700",
        intro:
          "We're driving climate action across Nigeria through a nationwide environmental literacy program that brings climate education into schools, workplaces, and online communities in all 36 states. If you’re passionate about helping clients succeed and want to ensure they gain real value from our climate education initiatives, we’d love to have you on our team.",
        responsibilities: [
          "Build and maintain strong relationships with schools, workplaces, and community partners",
          "Help clients embed sustainability into routines through accessible, practical steps",
          "Support onboarding and rollout of climate education programs across diverse environments",
          "Contribute to the development of new strategies that enhance client success and impact",
          "Deliver resources, guidance, and timely assistance to ensure smooth program adoption",
          "Assist in expanding program reach by supporting outreach and engagement efforts",
          "Maintain accurate records of client and community activity, feedback, and milestones",
          "Support development and dissemination of climate awareness content for online communities."
        ],
        eligibility: [
          "Post-secondary diploma, certificate, or degree is required.",
          "Ability to explain complex information to diverse audiences.",
          "Effective communication skills in English, both written and verbal.",
          "Excellent interpersonal and teamwork abilities."
        ],
        benefits: [
          "Accommodation Allowance",
          "Employee Health Insurance",
          "30 Days Annual Paid Leave",
          "Competitive Salary a $350",
          "Annual Performance Bonus",
          "Remote with Optional In-person"
        ],
        deadline: "11th April 2025",
        status: "closed"
      };
      