'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValue, FieldValues, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setEducation } from "@/redux/slice/userSlice";
import { useEffect, useRef, useState } from "react";
import { Ieducation } from "@/lib/types";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/rootSlice";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

const EducationForm = () => {

    const [expanded, setExpanded] = useState<string | false>("");
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { templateId } = useParams();
    const progress = useAppSelector(state => state.rootSlice.progress);
    const education = useAppSelector(state => state.userSlice.education);


    const form = useForm({
        defaultValues: {
            education: education || [
                {
                    schoolName: '',
                    schoolLocation: '',
                    degree: '',
                    fieldOfStudy: '',
                    graduationMonth: '',
                    endDate: '',
                    id: Math.floor(Math.random() * 100).toString(),
                    percentage: 0

                },
            ]
        }
    });

    const fieldArray = useFieldArray({
        name: 'education',
        control: form.control
    })
    const watchFieldsArray = form.watch('education');

    const controlledFields = fieldArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldsArray[index]
        }
    })

    const onSubmit = (data: FieldValues) => {
        const education = data.education;
        const parsedEducation = education.map((item: Ieducation) => {
            return {
                schoolName: item.schoolName,
                schoolLocation: item.schoolLocation,
                degree: item.degree,
                fieldOfStudy: item.fieldOfStudy,
                graduationMonth: item.graduationMonth,
                endDate: item.endDate,
                percentage: item.percentage
            }
        })
        // dispatch(setEducation(parsedEducation));
        router.push(`/builder/${templateId}/social`);
        if (progress <= 46) {
            dispatch(setProgress())
        }


    }
    const handleChange = () => {
        // const education = controlledFields.education;
        // const parsedEducation = controlledFields.map((item) => {
        //     return {
        //         schoolName: item.schoolName,
        //         schoolLocation: item.schoolLocation,
        //         degree: item.degree,
        //         fieldOfStudy: item.fieldOfStudy,
        //         graduationMonth: item.graduationMonth,
        //         endDate: item.endDate,
        //         id: item.id
        //     }
        // })

        dispatch(setEducation(controlledFields));
        console.log(controlledFields);


    }
    const handleAddMore = () => {
        const emptyField = {
            schoolName: '',
            schoolLocation: '',
            degree: '',
            fieldOfStudy: '',
            graduationMonth: '',
            endDate: '',
            percentage: 0,
            id: Math.floor(Math.random() * 100).toString()
        }
        fieldArray.append(emptyField)
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
        if (!education || education.length < controlledFields.length) {
            dispatch(setEducation(controlledFields));
            const expandedFieldIndex = controlledFields.length - 1;
            setExpanded(controlledFields[expandedFieldIndex].id)
        }
        //handling delete collapsible
        else if (education && education.length > controlledFields.length) {
            console.log("else",controlledFields);
            
            if (controlledFields.length > 0) {
                dispatch(setEducation(controlledFields));
            }
            else {
                toast.error('Profile should have at least one education field')
            }
        }

    }, [controlledFields.length]);

    if (!isMounted) return null;
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <main className="p-5">

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-10">

                        {
                            (!education ? controlledFields : education)?.map((item: Ieducation, index: number) => {
                                return (
                                    <>
                                        <Collapsible
                                            onOpenChange={() => handleCollapsible(item.id, item.id === expanded)}
                                            className="w-[350px] space-y-2 transition"
                                            open={item.id === expanded}
                                        >
                                            <div className="flex transition hover:bg-blue-300 items-center bg-blue-400 px-5">
                                                <CollapsibleTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="w-full hover:bg-blue-300">
                                                        Delhi University
                                                        {/* {education?.[expanded + 1]?.schoolName || 'Delhi University'} */}
                                                    </Button>
                                                </CollapsibleTrigger>
                                                <Trash
                                                    className="ml-auto cursor-pointer text-neutral-200"
                                                    onClick={() => handleDelete(index)} />
                                            </div>
                                            <CollapsibleContent>
                                                <div key={item.id} className="flex flex-col gap-5 border p-5">

                                                    {/* schoolName */}
                                                    <FormField
                                                        name={`education.${index}.schoolName`}
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
                                                    {/* schoolLocation */}
                                                    <FormField
                                                        name={`education.${index}.schoolLocation`}
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

                                                    {/* degree */}
                                                    <FormField
                                                        name={`education.${index}.degree`}
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

                                                    {/* fieldOfStudy */}
                                                    <FormField
                                                        name={`education.${index}.fieldOfStudy`}
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

                                                    {/* GPA percentage */}
                                                    <FormField
                                                        name={`education.${index}.percentage`}
                                                        control={form.control}
                                                        render={({ field }) => (
                                                            <FormItem >
                                                                <FormLabel>GPA/Percentage</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        className="bg-white" {...field}
                                                                        placeholder="88%"
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    {/* GraduationMonth */}

                                                    <FormField
                                                        name={`education.${index}.graduationMonth`}
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

                                                    {/* endDate */}
                                                    <FormField
                                                        name={`education.${index}.endDate`}
                                                        control={form.control}
                                                        render={({ field }) => (
                                                            <FormItem >
                                                                <FormLabel>End Date</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        type="date"
                                                                        className="bg-white" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </>

                                )
                            })
                        }

                        <div className="flex gap-5">
                            <Button
                                type="button"
                                onClick={handleAddMore}
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
        </main >
    )
}

export default EducationForm