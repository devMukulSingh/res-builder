

export interface IpersonalInfo{
    fullName:string,
    email:string,
    profession:string,
    address:string,
    countryCode:string,
    mobile:string,
    state:string,
    dob:Date,
    birthPlace:string
}

export interface Iexperience{
    company:string,
    employer:string,
    role:string,
    address:string,
    startDate:Date,
    endDate:Date,
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
    graduationMonth:Date,
    endDate:Date
}
export interface Icontact{
    linkedIn:string,
    twitter:string,
    github:string,
    portfolio:string,
}
export interface Iachievements{
    certifications:string[]
}

export interface Ilanguages{
    languagesInfo : {
        language:string,
        strength:string,
    }[]
}