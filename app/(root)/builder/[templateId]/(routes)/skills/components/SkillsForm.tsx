'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setExperience, setTechnicalSkills } from "@/redux/slice/userSlice";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/userSlice";
import Skill from "./Skill";
import { useState } from "react";

const SkillsForm = () => {

    const form = useForm();
    const dispatch = useAppDispatch();
    const { templateId } = useParams();
    const router = useRouter();
    const progress = useAppSelector(state => state.persistedReducer.progress);
    const technical = useAppSelector(state => state.persistedReducer.technicalSkills)


    const skills = [
        'Typescript',
        'Reactjs',
        'Nextjs',
        'MongoDB',
        'MySQL',
        'ExpressJs'
    ]

    const onSubmit = (data: FieldValues) => {
        dispatch(setTechnicalSkills(data));
        router.push(`/builder/${templateId}/education`);

        if (progress <= 34) {
            dispatch(setProgress())
        }
    }
    const handleChange = () => {
        console.log("formva",form.getValues());
        
        dispatch(setTechnicalSkills( form.getValues()) )
    }

    return (
        <main className="p-5 space-y-5">
            <section>
                <h1 className=" font-semibold mb-5">Select AI Suggested Skill</h1>

                <div className="grid grid-cols-2 gap-5" >
                    {
                        skills.map((skill) => (
                            <Skill
                                skill={skill}
                                key={skill}
                            />
                        ))
                    }
                </div>
            </section>

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            defaultValue={technical.customSkill}
                            name="customSkill"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <Input
                                            className="bg-white py-8" {...field}
                                            placeholder="You didn't find? Enter your skill" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full mt-10 py-6">
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default SkillsForm