'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { setExperience } from "@/redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Iexperience } from "@/lib/types";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/rootSlice";
import { Textarea } from "@/components/ui/textarea";

const ExperienceForm = () => {

    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const { templateId } = useParams();
    const progress = useAppSelector(state => state.rootSlice.progress);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const dispatch = useAppDispatch();
    const form = useForm({
        defaultValues: {
            experience: [
                {
                    companyName: '',
                    employer: '',
                    role: '',
                    address: '',
                    startDate: '',
                    endDate: '',
                    checkbox: false,
                    bio: '',
                    description: ''
                }
            ]
        }
    });
    const fieldArray = useFieldArray({
        name: 'experience',
        control: form.control
    })

    const watchFieldsArray = form.watch('experience');

    const controlledFields = fieldArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldsArray[index]
        }
    })

    const onSubmit = (data: FieldValues) => {
        const experience = data.experience;
        const parsedExperience = experience.map((item: Iexperience) => {
            return {
                companyName: item.companyName,
                employer: item.employer,
                role: item.role,
                address: item.address,
                startDate: item.startDate,
                endDate: item.endDate,
                checkbox: item.checkbox,
                description: item.description
            }
        })
        dispatch(setExperience(parsedExperience));
        router.push(`/builder/${templateId}/technical`);

        if (progress <= 22) {
            dispatch(setProgress())
        }

    }
    const handleChange = () => {
        const experience = form.getValues().experience;
        const parsedExperience = experience.map(item => {
            return {
                companyName: item.companyName,
                employer: item.employer,
                role: item.role,
                address: item.address,
                startDate: item.startDate,
                endDate: item.endDate,
                checkbox: item.checkbox
            }
        })
        dispatch(setExperience(parsedExperience));
    }
    const experience = useAppSelector(state => state.userSlice.experience);

    const handleAddMore = () => {
        // handleCollapsible(fieldArray.fields.length)
        fieldArray.append({
            companyName: '',
            employer: '',
            role: '',
            address: '',
            startDate: '',
            endDate: '',
            checkbox: false,
            bio: '',
            description: '',
        });

    }

    if (!isMounted) return null;

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange} >
                    <div className="flex flex-col gap-5">
                        {
                            controlledFields.map((item, index) => {
                                return (
                                    <div className="flex flex-col gap-5 border p-5" key={item.id}>
                                        <FormField
                                            name={`experience.${index}.companyName`}
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
                                            name={`experience.${index}.employer`}
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
                                            name={`experience.${index}.role`}
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
                                            name={`experience.${index}.address`}
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
                                        <FormField
                                            name={`experience.${index}.description`}
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem >
                                                    <FormLabel>Description</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Led frontend development projects, collaborating closely with design and backend teams to deliver high-quality products.
                                                            Implemented responsive design principles to ensure optimal user experience across various devices.
                                                            Developed and maintained scalable web applications using modern technologies such as React.js and Vue.js."
                                                            className="bg-white py-8 h-52 " {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex gap-5">
                                            <FormField
                                                name={`experience.${index}.startDate`}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem >
                                                        <FormLabel>Start Date</FormLabel>
                                                        <FormControl>
                                                            <Input className="bg-white" {...field} type="date" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            {
                                                experience && !experience?.[index]?.checkbox &&
                                                <FormField
                                                    name={`experience.${index}.endDate`}
                                                    control={form.control}
                                                    render={({ field }) => (
                                                        <FormItem>
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
                                            }
                                        </div>
                                        <FormField
                                            name={`experience.${index}.checkbox`}
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-4">
                                                    <FormControl>
                                                        <Checkbox
                                                            className="size-6"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <FormLabel>Currently working here</FormLabel>
                                                </FormItem>
                                            )}

                                        />
                                    </div>
                                )
                            })
                        }
                        
                        <Button
                            onClick={handleAddMore}
                            type="button"
                            variant="ghost"
                            className="gap-2 self-start bg-transparent mt-5">
                            <PlusCircle />
                            Add More
                        </Button>

                        <Button
                            type="submit"
                            className="w-full py-6 mt-5">
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default ExperienceForm