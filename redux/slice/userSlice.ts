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
  technicalSkills: ItechnicalSkills 
  education: Ieducation[] | null
  contact: Icontact | null
  achievements: Iachievements[] | null
  languages: Ilanguages[] | null
  projects: Iprojects[] | null
  progress: number
  sidebar: boolean,
  skillsFromDb:string[]
}

const initialState: IinitialState = {
  personalInfo: null,
  experience: null,
  technicalSkills: {
    aiGenSkills:[],
    customSkills: [
      {
        skillName:''
      }
    ],
  },
  education: null,
  contact: null,
  achievements: null,
  languages: null,
  projects: null,
  progress: 10,
  sidebar: true,
  skillsFromDb:[]
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
      if(action.payload.aiGenSkills){
        state.technicalSkills.aiGenSkills = action.payload.aiGenSkills;
      }
      else{
        state.technicalSkills.customSkills = action.payload.customSkills
      }

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
    resetForm: state => {
      state.progress = 10;
      state.achievements=null,
      state.contact=null,
      state.education=[],
      state.experience=[],
      state.languages=[],
      state.personalInfo=null,
      state.projects=null,
      state.technicalSkills={
        aiGenSkills:[],
        customSkills:[
          {
            skillName:''
          }
        ]
      }
    },
    setDbSkills : (state,action) => {
      state.skillsFromDb = action.payload;
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
  setLanguages,
  setProjects,
  setProgress,
  resetForm,
  setDbSkills
} = userSlice.actions
