import { Internship, Service, Testimonial } from './types';

export const INTERNSHIPS: Internship[] = [
  {
    id: '1',
    title: 'Data Analytics & Power BI',
    category: 'Data Science',
    duration: '4 Weeks',
    level: 'Beginner',
    description: 'Master the art of data visualization and reporting using Power BI and Excel. Build real-world dashboards.',
    skills: ['Power BI', 'Excel', 'Data Cleaning', 'SQL'],
    image: 'https://picsum.photos/seed/data/400/250'
  },
  {
    id: '2',
    title: 'Python for Data Science',
    category: 'Data Science',
    duration: '6 Weeks',
    level: 'Intermediate',
    description: 'Deep dive into Python libraries like Pandas, NumPy, and Matplotlib to analyze complex datasets.',
    skills: ['Python', 'Pandas', 'NumPy', 'EDA'],
    image: 'https://picsum.photos/seed/python/400/250'
  },
  {
    id: '3',
    title: 'UI/UX Design Specialist',
    category: 'Design',
    duration: '4 Weeks',
    level: 'Beginner',
    description: 'Learn to design user-friendly interfaces using Figma. Create wireframes, prototypes, and high-fidelity designs.',
    skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing'],
    image: 'https://picsum.photos/seed/uiux/400/250'
  },
  {
    id: '4',
    title: 'AI & Machine Learning Foundations',
    category: 'Data Science',
    duration: '8 Weeks',
    level: 'Advanced',
    description: 'Understand the basics of AI, train simple models, and explore the future of intelligent systems.',
    skills: ['Machine Learning', 'Scikit-learn', 'AI Concepts'],
    image: 'https://picsum.photos/seed/ai/400/250'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'UI/UX Design Services',
    description: 'Our trained interns and mentors deliver stunning, user-centric web and mobile designs for your startup.',
    icon: 'palette'
  },
  {
    id: 's2',
    title: 'Data Science & Analytics',
    description: 'Unlock insights from your data. We provide data cleaning, visualization, and predictive modeling services.',
    icon: 'bar-chart'
  },
  {
    id: 's3',
    title: 'EdTech Content Creation',
    description: 'Partner with us to create engaging technical course content and curriculum for your students.',
    icon: 'book-open'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah J.',
    role: 'Data Analyst Intern',
    text: 'Owl AI bridged the gap between my college theory and real-world application. The Power BI project was a game changer for my resume.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Rahul M.',
    role: 'CS Student',
    text: 'The flexibility of self-paced learning combined with actual tasks made this the perfect internship alongside my studies.',
    avatar: 'https://picsum.photos/seed/rahul/100/100'
  }
];

export const GEMINI_SYSTEM_INSTRUCTION = `
You are the "Owl AI Career Mentor". 
Owl AI is a student-led edtech startup.
Mission: "Learn. Intern. Grow."
Offerings: Virtual internships in Data Analytics, Python, Power BI, Excel, UI/UX, and AI.
Tone: Encouraging, professional, helpful, and student-focused.

Your goal is to help students find the right internship path based on their interests or explain Owl AI's services to potential partners.
If asked about costs, mention that courses are "affordable" but do not give specific prices.
Highlight that internships come with certificates and placement support.
Keep responses concise (under 100 words) unless asked for details.
`;
