'use client'
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";

const PersonalForm = () => {

    const schema = z.object({
        fullName: z.string().min(3).max(30),
        email: z.string().email(),
        profession: z.string().min(3).max(30),
        address: z.string().min(3).max(30),
        countryCode: z.string().min(2),
        mobile: z.number(),
        city: z.string().max(20),
        state: z.string().min(3).max(20),
        dob: z.string(),
        birthPlace: z.string().min(3)

    })

    type formSchema = z.infer<typeof schema>

    const form = useForm<formSchema>({
        resolver: zodResolver(schema)
    })
    const onSubmit = (data:formSchema) => {
        console.log(data);
        
    }
    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            name="fullName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Full Name</FormLabel>
                                    <Input className="bg-white" {...field} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Email Address</FormLabel>
                                    <Input className="bg-white" {...field} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="profession"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Profession</FormLabel>
                                    <Input className="bg-white" {...field} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="address"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Address</FormLabel>
                                    <Input className="bg-white" {...field} />
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
                                        <Input className="bg-white" {...field} />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="mobile"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Mobile</FormLabel>
                                        <Input className="bg-white" {...field} />
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
                                        <Input className="bg-white" {...field} />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="state"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>State</FormLabel>
                                        <Input className="bg-white" {...field} />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex gap-5">
                            <FormField
                                name="dob"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Date of Birth</FormLabel>
                                        <Input className="bg-white" {...field} />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="birthPlace"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Birth Place</FormLabel>
                                        <Input className="bg-white" {...field} />
                                    </FormItem>
                                )}
                            />
                        </div>

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

export default PersonalForm