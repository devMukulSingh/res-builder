'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { setExperience } from "@/redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";
import { PlusCircle, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Iexperience } from "@/lib/types";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/userSlice";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import toast from "react-hot-toast";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ExperienceForm = () => {

    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const { templateId } = useParams();
    const progress = useAppSelector(state => state.persistedReducer.progress);
    const [expanded, setExpanded] = useState<string | false>("");
    const dispatch = useAppDispatch();
    const experience = useAppSelector(state => state.persistedReducer.experience);
    const { Quill } = ReactQuill;
    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            [
                { list: "ordered" },
                { list: "bullet" },
            ]
        ]
    }


    const form = useForm({
        defaultValues: {
            experience: experience || [
                {
                    companyName: '',
                    employer: '',
                    role: '',
                    address: '',
                    startDate: '',
                    endDate: '',
                    checkbox: false,
                    bio: '',
                    description: '',
                    id: Math.floor(Math.random() * 100).toString(),
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
                checkbox: item.checkbox,
                id: item.id,
                description: item.description
            }
        })
        dispatch(setExperience(parsedExperience));
    }

    const handleAddMore = () => {
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
            id: Math.floor(Math.random() * 100).toString(),
        });

    }
    const handleCollapsible = (id: string, isExpanded: boolean) => {

        if (isExpanded) {
            setExpanded(false)
        }
        else {
            setExpanded(id);
        }
    }
    const handleDelete = (index: number) => {
        if (controlledFields.length > 0) {
            fieldArray.remove(index);
        }
    }

    useEffect(() => {
        setIsMounted(true);
        setExpanded(controlledFields[0]?.id);
    }, [])

    useEffect(() => {
        //handling add more functionality
        if (!experience || experience.length < controlledFields.length) {
            dispatch(setExperience(controlledFields));
            const expandedFieldIndex = controlledFields.length - 1;
            setExpanded(controlledFields[expandedFieldIndex].id)
        }
        //handling delete collapsible
        else if (experience && experience.length > controlledFields.length) {
            if (controlledFields.length > 0) {
                dispatch(setExperience(controlledFields));
            }
            else {
                toast.error('Profile should have at least one experience field')
            }
        }

    }, [controlledFields.length]);
    if (!isMounted) return null;

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange} >
                    <div className="flex flex-col gap-5 ">
                        {
                            (!experience ? controlledFields : experience)?.map((item, index) => {
                                return (
                                    <Collapsible
                                        key={index}
                                        onOpenChange={() => handleCollapsible(item.id, item.id === expanded)}
                                        className="space-y-2 transition"
                                        open={item.id === expanded}
                                    >
                                        <div className="flex transition hover:bg-red-300 items-center bg-red-400 px-5">
                                            <CollapsibleTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full hover:bg-red-300 text-neutral-100">
                                                    {experience?.[index].companyName || 'Company'}
                                                </Button>
                                            </CollapsibleTrigger>
                                            <Trash
                                                className="ml-auto cursor-pointer text-neutral-200"
                                                onClick={() => handleDelete(index)} />
                                        </div>

                                        <CollapsibleContent
                                            className="flex flex-col gap-5 border p-5 "
                                            key={item.id}>

                                            {/* CompanyName */}
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
                                            {/* employerName */}

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

                                            {/* role */}
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

                                            {/* address */}
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

                                            {/* description */}

                                            <FormField
                                                defaultValue="Creative Frontend Developer with expertise in HTML, CSS, and JavaScript. Proven ability to transform design concepts into responsive web applications. Passionate about delivering visually appealing and user-centric experiences"
                                                name={`experience.${index}.description`}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem >
                                                        <FormLabel>Description</FormLabel>
                                                        <FormControl>
                                                            <ReactQuill
                                                                value={field.value || ''}
                                                                onChange={(content, delta, source, editor) => {
                                                                    field.onChange(content);
                                                                    handleChange();
                                                                }}
                                                                style={{ height: '8rem' }}
                                                                theme="snow"
                                                                modules={modules}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {/* start and endDate */}
                                            <div className="flex gap-5 mt-10">
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

                                            {/* checkbox */}
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

                                        </CollapsibleContent>

                                    </Collapsible>
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