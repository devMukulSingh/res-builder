
interface AchievementsSectionProps{
    achievement:string
}

const AchievementSection:React.FC<AchievementsSectionProps> = ({
    achievement
}) => {
    if(!achievement) return null;
  return (
        <li>
            {achievement}
        </li>
  )
}

export default AchievementSection