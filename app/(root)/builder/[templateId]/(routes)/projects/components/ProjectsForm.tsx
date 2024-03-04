'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setContact } from "@/redux/slice/userSlice";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";

const ProjectsForm = () => {

    const dispatch = useAppDispatch();
    const form = useForm();

    const onSubmit = (data: FieldValues) => {
        dispatch(setContact(data));
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
                            name="linkedinLink"
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
                            name="twitterLink"
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
                            name="githubLink"
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