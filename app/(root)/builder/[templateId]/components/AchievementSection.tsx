import { Iachievements } from "@/lib/types"


interface AchievementsSectionProps{
    achievement:Iachievements
}

const AchievementSection:React.FC<AchievementsSectionProps> = ({
    achievement
}) => {
  return (
        <li>
            {achievement.value}
        </li>
  )
}

export default AchievementSection