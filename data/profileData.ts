import { LucideIcon, Briefcase, Award, Heart, LayoutDashboard, Database, FileSpreadsheet, Monitor, Radio, Shield, Globe } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}

export interface Experience {
  title: string;
  organization: string;
  duration: string;
  description: string;
  category: "Military" | "Professional";
}

export interface Achievement {
  title: string;
  issuer: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const profileData = {
  name: "Sohail Hanif Abbasi",
  title: "Army Veteran | Radar Technician | Business Support Specialist",
  tagline: "25 Years of Military Excellence | Technical Expertise | Community Leadership",
  location: "Madinah, Saudi Arabia (Origin: Khanspur Ayubia, Abbottabad)",
  bio: "A Pakistan Army veteran with 25 years of distinguished service in the EME Department. Specialized as a Radar Technician with international training in China and recipient of the Tamgha-e-Khidmat military award. Currently leveraging technical discipline and IT skills in business support and operations in Madinah, Saudi Arabia. Dedicated to community welfare through the Roshan Ayubia organization.",

  skills: [
    { name: "Radar Systems", icon: Radio, level: 95 },
    { name: "Graphic Design", icon: LayoutDashboard, level: 85 },
    { name: "MS Excel", icon: FileSpreadsheet, level: 90 },
    { name: "Data Entry", icon: Database, level: 95 },
    { name: "Stock Management", icon: Shield, level: 85 },
    { name: "Computer Operations", icon: Monitor, level: 90 },
    { name: "Business Support", icon: Briefcase, level: 85 },
  ],

  experience: [
    {
      title: "Radar Technician / Senior NCO",
      organization: "Pakistan Army (EME Department)",
      duration: "25 Years",
      description: "Served with distinction in the Electrical and Mechanical Engineering department. Specialized in radar systems maintenance and operation. Received advanced technical training in China. Awarded Tamgha-e-Khidmat for exemplary service.",
      category: "Military"
    },
    {
      title: "Business Operations Support",
      organization: "Private Company (Madinah)",
      duration: "Present",
      description: "Providing essential business support, stock management, and IT operations assistance in a professional environment.",
      category: "Professional"
    },
    {
      title: "Freelance Business Support",
      organization: "Self-Employed",
      duration: "Various",
      description: "Assisting with data entry, Excel automation, and graphic design for various clients.",
      category: "Professional"
    }
  ],

  achievements: [
    {
      title: "Tamgha-e-Khidmat (Military)",
      issuer: "Pakistan Army",
      description: "Awarded for meritorious service and dedication to duty during a distinguished 25-year military career."
    },
    {
      title: "China Technical Training",
      issuer: "Chinese Technical Institute",
      description: "Advanced specialized training in Radar Systems and electronic maintenance."
    },
    {
      title: "Army Service Completion",
      issuer: "Pakistan Army",
      description: "Successfully completed 25 years of honorable service in the EME Department."
    }
  ],

  welfare: {
    name: "Roshan Ayubia",
    mission: "Community Empowerment & Welfare",
    description: "Leading and supporting community development initiatives in the Ayubia region, focusing on social responsibility and local support.",
    impact: "Active community engagement, local welfare projects, and leadership in social causes."
  },

  socials: {
    facebook: "https://www.facebook.com/muhammad.sohailabbasi.56",
    email: "shabbasi2566@gmail.com",
    whatsapp: "+923225034517"
  },

  testimonials: [
    {
      name: "Colonel Rashid Mehmood",
      role: "Former Commanding Officer, EME Corps",
      quote: "Sohail is one of the most dedicated and disciplined soldiers I have had the privilege of serving alongside. His technical mastery of radar systems and unwavering commitment to duty were exemplary throughout his 25-year service."
    },
    {
      name: "Ahmed Khan",
      role: "Business Partner, Madinah",
      quote: "Working with Sohail has been a remarkable experience. His military discipline translates into incredible precision and reliability in business operations. He brings professionalism and dedication to everything he does."
    },
    {
      name: "Tariq Hussain",
      role: "Community Member, Roshan Ayubia",
      quote: "Sohail Bhai's contribution to our community through Roshan Ayubia is truly inspiring. He has been a pillar of strength for the people of Ayubia, always ready to help those in need."
    },
    {
      name: "Maj. Farhan Siddiqui",
      role: "Fellow NCO, Pakistan Army",
      quote: "During our time in the EME Department, Sohail demonstrated exceptional leadership and technical skill. His training in China further sharpened abilities that were already outstanding. A true asset to the forces."
    },
    {
      name: "Usman Abbasi",
      role: "Local Welfare Coordinator",
      quote: "The welfare initiatives led by Sohail Sahib have brought real, measurable change to our community. His vision for Roshan Ayubia and his selfless commitment to social causes make him a role model for us all."
    }
  ]
};
