'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { setExperience } from "@/redux/slice/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";

const ExperienceForm = () => {

    const dispatch = useAppDispatch();

    const form = useForm({});

    const onSubmit = (data:FieldValues) => {
        dispatch(setExperience(data));    
    }
    const handleChange = () => {
        dispatch(setExperience(form.getValues()));        
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange} >
                    <div className="flex flex-col gap-5">
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
                            name="employer"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Employer</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white" {...field} placeholder="rangam.com" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="role"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Jr. Frontend Developer" 
                                            className="bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="address"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-5">
                            <FormField
                                name="startDate"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Start Date</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} type="date"/>
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
                        </div>
                        <FormField
                            name="checkbox"
                            control={form.control}
                            render = { ({field}) => (
                                <FormItem className="flex items-center gap-5">
                                    <FormControl>
                                        <Input 
                                        type="checkbox" {...field} 
                                        className="size-6"/>
                                    </FormControl>
                                    <FormLabel>Currently working here</FormLabel>
                                </FormItem>
                            )}
                        
                        />
                        <Button
                            type="submit"
                            className="w-full">
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default ExperienceForm