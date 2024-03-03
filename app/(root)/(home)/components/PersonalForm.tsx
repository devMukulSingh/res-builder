'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { setPersonalInfo } from "@/redux/slice/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useRouter } from "next/navigation";

const PersonalForm = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const schema = z.object({
        fullName: z.string().min(3, {
            message: 'Name should be minimum 3 characters'
        }).max(30, {
            message: 'Name should be max 30 characters'
        }),
        email: z.string().email({
            message: 'Please enter valid email'
        }),
        profession: z.string().min(3, {
            message: 'Profession should be minimum 5 characters'
        }).max(30, {
            message: 'Profession should be max 30 characters'
        }),
        address: z.string().min(5, {
            message: 'Address should be minimum 5 characters'
        }).max(30, {
            message: 'Address should be max 30 characters'
        }),
        countryCode: z.string().min(2, {
            message: 'CountryCode should be minimum 2 numbers'
        }),
        mobile: z.string().min(10, {
            message: 'Mobile no should be minimum 10 numbers'
        }),
        city: z.string().min(3, {
            message: 'City should be minimum 3 characters'
        }).max(20, {
            message: 'City should be max 20 characters'
        }),
        state: z.string().min(3, {
            message: 'State should be minimum 3 characters'
        }).max(20, {
            message: 'State should be max 20 characters'
        }),


    })

    type formSchema = z.infer<typeof schema>

    const form = useForm<formSchema>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: formSchema) => {
        dispatch(setPersonalInfo(data));
        router.push('/templates');
    }
    return (
        <main className=" text-neutral-500">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="py-8 px-10 bg-red-100 flex flex-col gap-5 w-4/5">
                        <FormField
                            name="fullName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="profession"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Profession</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white" {...field} />
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
                                name="countryCode"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Country Code</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="mobile"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Mobile</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex gap-5">
                            <FormField
                                name="city"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="state"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>State</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>


                        <Button
                            type="submit"
                            className="w-full mt-5">
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default PersonalForm