import {
  Iachievements,
  Icontact,
  Ieducation,
  Iexperience,
  Ilanguages,
  IpersonalInfo,
  ItechnicalSkills
} from '@/lib/types'
import { createSlice } from '@reduxjs/toolkit'

export interface IinitialState {
  personalInfo: IpersonalInfo | null
  experience: Iexperience | null
  technicalSkills: ItechnicalSkills | null
  education: Ieducation[] | null
  contact: Icontact | null
  achievements: Iachievements | null
  languages: Ilanguages | null
}

const initialState: IinitialState = {
  personalInfo: null,
  experience: null,
  technicalSkills: null,
  education: null,
  contact: null,
  achievements: null,
  languages: null
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
    }
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
  setLanguages
} = userSlice.actions
