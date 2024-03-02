import { Contact, GraduationCap, Languages, User } from 'lucide-react'
import { BiCertification } from 'react-icons/bi'
import { FaUserPen } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi'

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
    title: 'Experience'
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
    icon: BiCertification,
    title: 'Certification'
  },
  {
    icon: Languages,
    title: 'Language'
  }
]
