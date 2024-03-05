'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { setPersonalInfo } from "@/redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/rootSlice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IcountryCode, countryCodes } from "@/lib/constants";

const PersonalForm = () => {

    const dispatch = useAppDispatch();
    const { templateId } = useParams();
    const router = useRouter();

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
        dob: z.any(),
        birthPlace: z.string().min(3, {
            message: 'BirthPlace should be minimum 3 characters'
        }).max(20, {
            message: 'BirthPlace should be max 20 characters'
        })

    })

    type formSchema = z.infer<typeof schema>
    const personalInfo = useAppSelector(state => state.userSlice.personalInfo);
    const progress = useAppSelector(state => state.rootSlice.progress);

    const form = useForm<formSchema>({
        resolver: zodResolver(schema),
        defaultValues: personalInfo || {
            address: '',
            birthPlace: '',
            city: '',
            countryCode: '+91',
            dob: '',
            email: '',
            fullName: '',
            mobile: '',
            profession: '',
            state: ''
        }
    });
    const { errors } = form.formState;

    const onSubmit = (data: formSchema) => {
        dispatch(setPersonalInfo(data));
        router.push(`/builder/${templateId}/experience`);
        if (progress <= 10) {
            dispatch(setProgress())
        }

    }
    const handleChange = () => {
        dispatch(setPersonalInfo(form.getValues()));
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onChange={handleChange}
                    onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
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
                        <div className="flex gap-5 w-full">
                            <FormField
                                name="countryCode"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-1/2" >
                                        <FormLabel>Country Code</FormLabel>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-white">
                                                    <SelectValue placeholder="Proficient" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    countryCodes.map((code:IcountryCode) => (
                                                        <SelectItem
                                                            key={code.mobileCode}
                                                            value={code.mobileCode}
                                                        >
                                                            {code.mobileCode} ({code.name})
                                                        </SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="mobile"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-1/2" >
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

                        <div className="flex gap-5 w-full">
                            <FormField
                                name="dob"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-1/2">
                                        <FormLabel>Date of Birth</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white "  {...field} type="date" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="birthPlace"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-1/2" >
                                        <FormLabel>Birth Place</FormLabel>
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