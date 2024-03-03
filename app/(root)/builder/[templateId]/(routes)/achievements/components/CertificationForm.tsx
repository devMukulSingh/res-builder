'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const CertificationForm = () => {

    const form = useForm({

    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            name="linkedinLink"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Certification #1</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-8 bg-white" {...field}
                                            placeholder="eg Certificate of Engineering" />
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
                                    <FormLabel>Certification #2</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-8 bg-white" {...field}
                                            placeholder="eg Certificate of Engineering"
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
                                    <FormLabel>Certification #3</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="eg Certificate of Engineering"
                                            className="bg-white py-8 " {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            variant="ghost"
                            className="flex mr-auto items-center gap-2 bg-transparent"
                        >
                            <PlusCircle />
                            Add Certificate/License
                        </Button>
                        <Button
                            type="submit"
                            className="w-full mt-20 py-6">
                            Submit
                        </Button>

                    </div>
                </form>
            </Form>
        </main>
    )
}

export default CertificationForm