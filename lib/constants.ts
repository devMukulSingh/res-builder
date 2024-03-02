import { Contact, GraduationCap, Languages, User } from 'lucide-react'
import { FaUserPen } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi';

export const templatesUrl = [
  {
    url: '/resume-template-1.jpg',
    id: 'temp1'
  },
  {
    url: '/resume-template-1.jpg',
    id: 'temp2'
  }
]

export const sidebarOptions = [
  {
    icon: User,
    title: 'Personal Information'
  },
  {
    icon: FaUserPen,
    title: 'Experince'
  },
  {
    icon: GiSkills,
    title: 'Technical Skills'
  },
  {
    icon: GraduationCap,
    title: 'Education'
  },
  {
    icon: Contact,
    title: 'Contact Information'
  },
  {
    icon: Languages,
    title: 'Language'
  }
]
