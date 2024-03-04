'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setExperience } from "@/redux/slice/userSlice";

const TechnicalForm = () => {

    const form = useForm();
    const dispatch = useAppDispatch();

    const onSubmit = (data: FieldValues) => {
        dispatch(setExperience(data))
    }
    const handleChange = () => {
        dispatch(setExperience(form.getValues()));        
    }

    return (
        <main className="p-5">
            <h1 className=" font-semibold mb-5">Select AI Suggested Skill</h1>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={ handleChange}>
                    <div className="flex flex-col gap-5">

                        <div className="flex gap-5">
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex gap-5">
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex gap-5">
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex gap-5">
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="company"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Company</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} placeholder="Rangam" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <FormField
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
                            className="w-full mt-20 py-6">
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default TechnicalForm