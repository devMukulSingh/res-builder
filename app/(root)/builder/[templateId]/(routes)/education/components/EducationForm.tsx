'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setEducation } from "@/redux/slice/userSlice";

const EducationForm = () => {

    const dispatch = useAppDispatch();
    const form = useForm();

    const onSubmit = (data: FieldValues) => {
        dispatch(setEducation(data));
    }
    const handleChange = () => {
        dispatch(setEducation(form.getValues()));     
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            name="schoolName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>School Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-white" {...field}
                                            placeholder="Delhi University" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="schoolLocation"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>School Location</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-white" {...field}
                                            placeholder="New Delhi" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="degree"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Degree/Program</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="B.Sc in Computer Science"
                                            className="bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="fieldOfStudy"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Field of Study</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-white" {...field}
                                            placeholder=""
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="graduationMonth"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Graduation Month</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-white" {...field}
                                            type="date" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="endDate"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>End Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="MM YY"
                                            type="date"
                                            className="bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex gap-5">
                            <Button
                                type="submit"
                                className="w-full">
                                Add More
                            </Button>
                            <Button
                                type="submit"
                                className="w-full">
                                Next
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default EducationForm