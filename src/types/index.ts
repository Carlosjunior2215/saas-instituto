export interface Specialty {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Differential {
  id: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  specialty: string;
  description: string;
  avatar: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface Unit {
  id: string;
  city: string;
  state: string;
  address: string;
  cep: string;
  whatsapp: string;
  whatsappLink: string;
  instagram: string;
  mapEmbedUrl: string;
  logo: string;
}
