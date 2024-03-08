import { Ilanguages } from '@/lib/types'
import React from 'react'

interface LanguageSectionProps {
    language: Ilanguages | null
}

const LanguageSection: React.FC<LanguageSectionProps> = ({
    language
}) => {
    if(!language?.language || !language.strength) return null;
    return (
        <li>
            {(`${language?.language} - ${language?.strength}`) || ''}
        </li>
    )
}

export default LanguageSection