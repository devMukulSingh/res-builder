import React, { useState } from 'react'

interface SkillProps {
    skill: string,
    selectedSkills: string[],
    setSelectedSkills: (skill: string[]) => void;
}

const Skill: React.FC<SkillProps> = ({
    skill,
    selectedSkills,
    setSelectedSkills
}) => {

    const [currentSelected, setCurrentSelected] = useState(false);

    const handleSelect = () => {
        setCurrentSelected(prev => !prev);
        const alreadySelected = selectedSkills.find((item) => item === skill);
        if (alreadySelected) {
            const filtered = selectedSkills.filter(item => item !== skill);
            setSelectedSkills(filtered);
        }
        else {
            setSelectedSkills([...selectedSkills, skill])
        }
    };

    return (
        <div
            onClick={handleSelect}
            className={`p-5 bg-white rounded-md cursor-pointer ${currentSelected && 'border-4 border-red-400 transition scale-90'} `}>
            <h1>{skill}</h1>
        </div>
    )
}

export default Skill