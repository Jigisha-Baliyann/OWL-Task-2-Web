export interface Internship {
  id: string;
  title: string;
  category: 'Data Science' | 'Development' | 'Design' | 'Business';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  skills: string[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}