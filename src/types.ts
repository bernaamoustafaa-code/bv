export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  specs: { label: string; value: string }[];
  images?: string[];
  aspect?: "3/4" | "4/3";
}

export type SectionType = 'about' | 'creations' | 'contact' | null;

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceType: string;
}
