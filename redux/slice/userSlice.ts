import {
  Iachievements,
  Icontact,
  Ieducation,
  Iexperience,
  Ilanguages,
  IpersonalInfo,
  Iprojects,
  ItechnicalSkills
} from '@/lib/types'
import { createSlice } from '@reduxjs/toolkit'

export interface IinitialState {
  personalInfo: IpersonalInfo | null
  experience: Iexperience[] | null
  technicalSkills: ItechnicalSkills | null
  education: Ieducation[] | null
  contact: Icontact | null
  achievements: Iachievements | null
  languages: Ilanguages | null,
  projects: Iprojects[] | null,
  progress: number
  sidebar: boolean
}

const initialState: IinitialState = {
  personalInfo: null,
  experience: null,
  technicalSkills: null,
  education: null,
  contact: null,
  achievements: null,
  languages: null,
  projects:null,
  progress: 10,
  sidebar: true
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload
    },
    setExperience: (state, action) => {
      state.experience = action.payload
    },
    setTechnicalSkills: (state, action) => {
      state.technicalSkills = action.payload
    },
    setEducation: (state, action) => {
      state.education = action.payload
    },
    setContact: (state, action) => {
      state.contact = action.payload
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload
    },
    setLanguages: (state, action) => {
      state.languages = action.payload
    },
    setProjects: (state, action) => {
      state.projects = action.payload
    },

    setProgress: state => {
      const singleProgress = Math.floor(100 / 8)
      state.progress = state.progress + singleProgress
    },
    resetProgressBar: state => {
      state.progress = 10
    },

  }
})

export default userSlice.reducer

export const {
  setPersonalInfo,
  setExperience,
  setTechnicalSkills,
  setEducation,
  setContact,
  setAchievements,
  setLanguages,
  setProjects,
  setProgress,
  resetProgressBar
} = userSlice.actions
