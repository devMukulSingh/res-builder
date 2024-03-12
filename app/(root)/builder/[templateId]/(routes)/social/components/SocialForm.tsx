'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {  FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setContact } from "@/redux/slice/userSlice";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/userSlice";

const SocialForm = () => {

    const dispatch = useAppDispatch();
    const form = useForm();
    const { templateId } = useParams();
    const router = useRouter();    
    const progress = useAppSelector( state => state.persistedReducer.progress);


    const onSubmit = (data: FieldValues) => {
        router.push(`/builder/${templateId}/projects`);
        if(progress <= 58){
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
                            name="linkedinLink"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Linkedin Profile Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-8 bg-white" {...field}
                                            placeholder="eg https://johndoe.com" />
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
                                    <FormLabel>Twitter Profile Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-8 bg-white" {...field}
                                            placeholder="eg https://johndoe.com"
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
                                    <FormLabel>Github Profile Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="eg https://johndoe.com"
                                            className="bg-white py-8 " {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="portforlioLink"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Portfolio Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-8 bg-white" {...field}
                                            placeholder="eg https://johndoe.com"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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

export default SocialForm