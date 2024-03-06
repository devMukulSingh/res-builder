'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setContact } from "@/redux/slice/userSlice";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { setProgress } from "@/redux/slice/rootSlice";
import { useParams, useRouter } from "next/navigation";

const ProjectsForm = () => {

    const dispatch = useAppDispatch();
    const form = useForm();
    const router = useRouter();
    const { templateId } = useParams();
    const progress = useAppSelector(state => state.rootSlice.progress);


    const onSubmit = (data: FieldValues) => {
        dispatch(setContact(data));
        router.push(`/builder/${templateId}/achievements`);
        if (progress <= 70) {
            dispatch(setProgress())
        }

    }
    const handleChange = () => {
        dispatch(setContact(form.getValues()));
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            name="projectLink"
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
                            name="projectUrl"
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
                            name="description"
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

                        <Button
                            variant='ghost'
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