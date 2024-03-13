'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { resetForm, setAiSuggestedBio, setAiSuggestedSkills, setPersonalInfo } from "@/redux/slice/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useRouter } from "next/navigation";
import { countryCodes } from "@/lib/constants";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const PersonalForm = () => {

    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
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


    })

    type formSchema = z.infer<typeof schema>

    const form = useForm<formSchema>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: formSchema) => {
        router.push('/templates');
        // window.location.href = "/templates"
        dispatch(resetForm());
        dispatch(setPersonalInfo(data));
        try {
            const { data: res } = await axios.get(`/api/ai/get-bio`, {
                params: {
                    profession: data.profession
                }
            });
            console.log(res);
            const parsedBio = res?.replace(/[0-9]/g,'').split('\n').filter((item:string) => item !== '');
            dispatch(setAiSuggestedBio(parsedBio));
        }
        catch (e) {
            console.log(`Error in onSubmit ${e}`);
        }

        try {
            const { data: res } = await axios.get(`/api/ai/get-skills`, {
                params: {
                    profession: data.profession
                }
            });
            console.log(res);
            const parsedSkills = res?.replace(/[0-9]/g,'').split('\n').filter((item:string) => item !== '');
            dispatch(setAiSuggestedSkills(parsedSkills));
        }
        catch (e) {
            console.log(`Error in onSubmit ${e}`);
        }
    }
    return (
        <main className=" text-neutral-500">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="py-8 px-10 bg-red-100 flex flex-col gap-3 lg:w-4/5 w-full ml-auto ">

                        <FormField
                            name="fullName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white" {...field} placeholder="Deepak Prakash" />
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
                                        <Input
                                            className="bg-white" {...field}
                                            placeholder="deepak@gmail.com"
                                        />
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
                                        <Input
                                            className="bg-white" {...field}
                                            placeholder="Frontend Developer"
                                        />
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
                                        <Input
                                            className="bg-white" {...field}
                                            placeholder="Wagholi"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-5 w-full">
                            <FormField
                                defaultValue="+91"
                                name="countryCode"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-1/2">
                                        <FormLabel>Country Code</FormLabel>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild >
                                                <FormControl>

                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn(
                                                            "w-full bg-white justify-between",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {
                                                            countryCodes.find(
                                                                (countryCode) => countryCode.mobileCode === field.value
                                                            )?.mobileCode
                                                        }
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>

                                            <PopoverContent className=" p-0">
                                                <Command>
                                                    <CommandInput placeholder="Search country code..." className="h-9" />
                                                    <CommandEmpty>No country code found.</CommandEmpty>
                                                    <CommandGroup >
                                                        <ScrollArea className="h-72 rounded-md border">
                                                            {countryCodes.map((code) => (
                                                                <CommandItem
                                                                    key={code.name}
                                                                    value={code.name}
                                                                    onSelect={() => {
                                                                        form.setValue('countryCode', code.mobileCode);
                                                                        setOpen(false);
                                                                    }}
                                                                >
                                                                    {code.mobileCode} ({code.name})
                                                                    <Check
                                                                        className={cn(
                                                                            "ml-auto h-4 w-4",
                                                                            code.mobileCode === field.value ? "opacity-100" : "opacity-0"
                                                                        )}
                                                                    />
                                                                </CommandItem>
                                                            ))}
                                                        </ScrollArea>
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
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
                                            <Input
                                                className="bg-white" {...field}
                                                placeholder="9808808098"
                                            />
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
                                            <Input
                                                className="bg-white" {...field}
                                                placeholder="Pune"
                                            />
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
                                            <Input
                                                placeholder="Maharastra"
                                                className="bg-white" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full py-3 mt-4">
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default PersonalForm