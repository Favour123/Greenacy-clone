// policy.ts

export interface PolicySubContent {
  subtitle: string;
  items: string[];
}

export interface PolicySection {
  id: number;
  title: string;
  content: string[] | PolicySubContent[];
}


export const policySections = [
        {
          id: 1,
          title: "Information We Collect",
          content: [
            {
              subtitle: "Personal Information You Provide Voluntarily",
              items: [
                "Name",
                "Email address",
                "Phone number (optional)",
                "Organization or affiliation (if applicable)",
                "Any other information you share via contact forms, surveys, event registrations, or newsletter sign-ups"
              ]
            },
            {
              subtitle: "Information Collected Automatically",
              items: [
                "IP address",
                "Browser type and version",
                "Device type",
                "Pages visited and time spent on the site",
                "Referring website or URL",
                "Cookies and other tracking technologies"
              ]
            }
          ]
        },
        {
          id: 2,
          title: "How We Use Your Information",
          content: [
            "Respond to your inquiries or messages",
            "Share updates about our climate action initiatives and events",
            "Improve our website content, structure, and user experience",
            "Analyze user engagement and website performance",
            "Send newsletters and educational content (if you opt in)"
          ]
        },
        {
          id: 3,
          title: "How We Share Your Information",
          content: [
            "We do not sell, rent, or trade your personal information.",
            "With Service Providers: We may work with trusted service providers (e.g., email platforms or analytics tools) who help us operate our website.",
            "Legal Requirements: We may disclose information when legally required or to protect the rights, safety, or integrity of Greenacy, our users, or others."
          ]
        },
        {
          id: 4,
          title: "Cookies and Tracking Technologies",
          content: [
            "Remember user preferences",
            "Analyze website traffic",
            "Enhance user experience",
            "Note: You can manage or disable cookies through your browser settings. Some site features may not work properly if cookies are disabled."
          ]
        },
        {
          id: 5,
          title: "Email Communications",
          content: [
            "If you subscribe to our mailing list, we may send you periodic emails about Greenacy’s programs, activities, and resources.",
            "You may opt out of receiving these communications at any time by clicking the \"Unsubscribe\" link in any email you receive from us."
          ]
        },
        {
          id: 6,
          title: "Data Security",
          content: [
            "We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.",
            "However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security."
          ]
        }
      ];
      