'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {  setProjects } from "@/redux/slice/userSlice";
import { PlusCircle, Trash } from "lucide-react";
import { setProgress } from "@/redux/slice/userSlice";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import('@/components/commons/RichTextEditor'), {
    ssr: false
})

const ProjectsForm = () => {

    const [expanded, setExpanded] = useState<string | false>("");
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { templateId } = useParams();
    const progress = useAppSelector(state => state.persistedReducer.progress);
    const projects = useAppSelector(state => state.persistedReducer.projects);


    const form = useForm({
        defaultValues: {
            projects: projects || [
                {
                    projectName: '',
                    projectUrl: '',
                    description: '',
                    id: Math.floor(Math.random() * 100).toString()
                }
            ]
        }
    });

    const fieldArray = useFieldArray({
        name: 'projects',
        control: form.control
    })
    const watchFieldsArray = form.watch('projects');

    const controlledFields = fieldArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldsArray[index]
        }
    })

    const onSubmit = (data: FieldValues) => {
        router.push(`/builder/${templateId}/achievements`);
        if (progress <= 70) {
            dispatch(setProgress())
        }
    }

    const handleChange = () => {
        const projects = form.getValues().projects;
        const parsedProjects = projects.map((item) => {
            return {
                projectName: item.projectName,
                projectUrl: item.projectUrl,
                description: item.description,
                id: item.id,
            }
        })
        dispatch(setProjects(parsedProjects));
    }

    const handleAddMore = () => {
        const emptyField = {
            projectName: '',
            projectUrl: '',
            description: '',
            id: Math.floor(Math.random() * 100).toString()
        }
        fieldArray.append(emptyField)
    }
    const handleCollapsible = (id: string, isExpanded: boolean) => {

        if (isExpanded) {
            setExpanded(false)
        }
        else {
            setExpanded(id);
        }
    }
    const handleDelete = (index: number) => {
        if (controlledFields.length > 0) {
            fieldArray.remove(index);
        }
    }

    useEffect(() => {
        setIsMounted(true);
        setExpanded(controlledFields[0]?.id);
    }, [])

    useEffect(() => {

        //handling add more functionality
        if (!projects || projects.length < controlledFields.length) {
            dispatch(setProjects(controlledFields));
            const expandedFieldIndex = controlledFields.length - 1;
            setExpanded(controlledFields[expandedFieldIndex].id)
        }
        //handling delete collapsible
        else if (projects && projects.length > controlledFields.length) {
            console.log("else", controlledFields);

            if (controlledFields.length > 0) {
                dispatch(setProjects(controlledFields));
            }
            else {
                toast.error('Profile should have at least one projects field')
            }
        }

    }, [controlledFields.length]);

    if (!isMounted) return null;
    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-5">
                        {
                            projects?.map((item, index) => {
                                return (
                                    <Collapsible
                                        key={index}
                                        onOpenChange={() => handleCollapsible(item.id, item.id === expanded)}
                                        className="space-y-2 transition"
                                        open={item.id === expanded}
                                    >
                                        <div className="flex transition text-neutral-100 hover:bg-red-300 items-center bg-red-400 px-5">
                                            <CollapsibleTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full text-neutral-100 hover:bg-red-300">
                                                    {projects?.[index]?.projectName || 'Project'}
                                                </Button>
                                            </CollapsibleTrigger>
                                            <Trash
                                                className="ml-auto cursor-pointer text-neutral-200"
                                                onClick={() => handleDelete(index)} />
                                        </div>

                                        <CollapsibleContent
                                            key={item.id}
                                            className={
                                                `flex
                                                 flex-col
                                                  gap-5
                                                   border 
                                                   p-5 
                                                   transition-transform 
                                                   data-[state=open]:animate-accordion-down 
                                                   `}
                                        >
                                            {/* ProjectName */}
                                            <FormField
                                                name={`projects.${index}.projectName`}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem >
                                                        <FormLabel>Name of Project</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                className="py-8 bg-white" {...field}
                                                                placeholder="eg Google Lance" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* ProjectUrl */}
                                            <FormField
                                                name={`projects.${index}.projectUrl`}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem >
                                                        <FormLabel>Project Url</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                className="py-8 bg-white" {...field}
                                                                placeholder="eg www.google.com"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            {/* ProjectDescription */}
                                            <FormField
                                                name={`projects.${index}.description`}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem >
                                                        <FormLabel>Description</FormLabel>
                                                        <FormControl>
                                                            <RichTextEditor
                                                                value={field.value || ''}
                                                                onChange={(content) => {
                                                                field.onChange(content);
                                                                handleChange();
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </CollapsibleContent>
                                    </Collapsible>
                                )



                            })

                        }


                        <Button
                            onClick={handleAddMore}
                            variant='ghost'
                            type="button"
                            className="gap-2 self-start bg-transparent text-neutral-700"
                        >
                            <PlusCircle />
                            Add More Projects
                        </Button>
                        <Button
                            type="submit"
                            className="w-full py-6">
                            Next
                        </Button>

                    </div>
                </form>
            </Form>
        </main >
    )
}

export default ProjectsForm