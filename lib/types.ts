

export interface IpersonalInfo{
    fullName:string,
    email:string,
    profession:string,
    address:string,
    countryCode:string,
    mobile:string,
    state:string,
    dob:Date,
    birthPlace:string,
    bio:string
}

export interface Iexperience{
    companyName:string,
    employer:string,
    role:string,
    address:string,
    startDate:Date,
    endDate:Date,
    checkbox:boolean
}
export interface ItechnicalSkills{
    aiGenSkills:string[],
    customSkill:string
}
export interface Ieducation{
    schoolName:string,
    schoolLocation:string,
    degree:string,
    fieldOfStudy:string,
    graduationMonth:string,
    endDate:string,
    id:string
}
export interface Icontact{
    linkedIn:string,
    twitter:string,
    github:string,
    portfolio:string,
}
export interface Iachievements{
    achievements:{
        value:string
    }[]
}

export interface Ilanguages{
    languagesInfo : {
        language:string,
        strength:string,
    }[]
}