import { IpersonalInfo } from "@/lib/types"

interface PersonalSection {
    personalInfo: IpersonalInfo | null
}

const PersonalSection: React.FC<PersonalSection> = ({
    personalInfo
}) => {
    if(!personalInfo) return null;
    return (
        <main className="bg-white px-8 pt-10 pb-5 flex flex-col gap-5">
            {/* ABOUT */}
            <div className='space-y-2'>
                <h1 className='text-2xl font-semibold'>
                    {personalInfo?.fullName}
                </h1>
                <h1>
                    {personalInfo?.mobile}  {`${personalInfo?.email ? `|| ${personalInfo.email}` : ''}`}
                </h1>
            </div>

            <div className='space-y-2'>

                <h1 className='text-xl font-semibold'>
                    Address
                </h1>
                <h1>
                    {personalInfo?.address}
                </h1>

            </div>

            {/* BIO */}
            <div className=''>
                <h1 className='text-xl font-semibold'>
                    Bio
                </h1>
                <h1>
                    {/* Creative Frontend Developer with expertise in HTML, CSS, and JavaScript. Proven ability to transform design concepts into responsive web applications. Passionate about delivering visually appealing and user-centric experiences. */}
                </h1>
                {/* <RichTextEditors label="bio" /> */}
            </div>

        </main>
    )
}

export default PersonalSection