"use client";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/hooks/hooks";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ProjectSection from "./ProjectSection";
import AchievementSection from "./AchievementSection";
import ExperienceSection from "./ExperienceSection";
import PersonalSection from "./PersonalSection";
import { usePathname } from "next/navigation";
import SuggestedBio from "./SuggestedBio";
const LanguageSection = dynamic(() => import("./LanguageSection"), {
  ssr: false,
});
import { motion } from "framer-motion";

const Resume = () => {
  const sidebar = useAppSelector((state) => state.commonSlice.sidebar);
  const formComp = useAppSelector((state) => state.commonSlice.formComp);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1], scale: [0.9, 1] }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`max-h-[calc(100vh-6rem)] overflow-auto no-scrollbar ${sidebar ? "w-[calc(100vw-52rem)]" : "w-[calc(100vw-37rem)]"} pb-20  max-w-[60rem] shrink-0`}
      >
        <div className="text-neutral-700 pb-10 min-w-[40rem] flex flex-col gap-5 p-5  ">
          {/* PersonalInfo */}
          <PersonalSection />
          {formComp === "Personal Information" && <SuggestedBio />}

          <ExperienceSection />

          {/* SKILLS */}
          <SkillsSection />

          {/* Education */}
          <EducationSection />

          {/* Project */}
          <ProjectSection />

          {/* Achievements */}
          <AchievementSection />

          {/* Languages */}
          <LanguageSection />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
