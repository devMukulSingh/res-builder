'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setContact, setProjects } from "@/redux/slice/userSlice";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { setProgress } from "@/redux/slice/userSlice";
import { useParams, useRouter } from "next/navigation";

const ProjectsForm = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { templateId } = useParams();
    const progress = useAppSelector(state => state.persistedReducer.progress);

    const form = useForm({
        defaultValues: {
            projects: [
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
        dispatch(setProjects(data));
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
                description:item.description,
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

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-5">
                        {
                            controlledFields.map((field, index) => {
                                return (
                                    <div className="flex flex-col gap-5" key={index}>
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
                                        <FormField
                                            name={`projects.${index}.description`}
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem >
                                                    <FormLabel>Description</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Google Lens has many uses, including:
                                                Identifying objects: Google Lens can identify objects by reading barcodes, QR codes, labels, and text.
                                                Translating text: Google Lens can translate text into your language by pointing it at a sign or piece of paper in a foreign language.
                                                Exploring locales or menus."
                                                            className="bg-white py-8 h-60 " {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
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
        </main>
    )
}

export default ProjectsForm