'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {  FieldValues, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {  setTechnicalSkills } from "@/redux/slice/userSlice";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/userSlice";
import Skill from "./Skill";
import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";


const SkillsForm = ({
    
}) => {

    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch();
    const { templateId } = useParams();
    const router = useRouter();
    const progress = useAppSelector(state => state.persistedReducer.progress);
    const customSkills = useAppSelector(state => state.persistedReducer.technicalSkills?.customSkills);
    const skillsFromDb = useAppSelector(state => state.persistedReducer.skillsFromDb);



    // const skills = [
    //     'Typescript',
    //     'Reactjs',
    //     'Nextjs',
    //     'MongoDB',
    //     'MySQL',
    //     'ExpressJs'
    // ]

    const form = useForm({
        defaultValues: {
            customSkills: customSkills || [
                {
                    skillName: ''
                }
            ]
        }
    });
    const fieldArray = useFieldArray({
        name: 'customSkills',
        control: form.control
    })
    const watchFieldsArray = form.watch('customSkills');

    const controlledFields = fieldArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldsArray[index]
        }
    })

    const onSubmit = (data: FieldValues) => {
        router.push(`/builder/${templateId}/education`);
        if (progress <= 34) {
            dispatch(setProgress())
        }
    }
    const handleChange = () => {
        const customSkills = form.getValues().customSkills;
        const parsedSkills = customSkills.map(item => {
            return {
                skillName: item.skillName
            }
        })
        dispatch(setTechnicalSkills({
            customSkills: parsedSkills
        }));
    }
    const handleAddMore = () => {
        fieldArray.append({
            skillName: ''
        })
    }
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return (
        <main className="p-5 space-y-5">
            <section>
                <h1 className=" font-semibold mb-5">Select AI Suggested Skill</h1>

                <div className="grid grid-cols-2 gap-5" >
                    {
                        skillsFromDb.map((skill) => (
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
                        {
                            controlledFields.map((item, index) => (
                                <FormField
                                    key={index}
                                    name={`customSkills.${index}.skillName`}
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
                            ))
                        }

                        <Button
                            type="button"
                            onClick={handleAddMore}
                            variant="ghost"
                            className="self-start flex items-center gap-2 bg-transparent"
                        >
                            <PlusCircle />
                            Add more Skill
                        </Button>
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