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

const EducationForm = () => {

    const [current, setCurrent] = useState<string | false>("");
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useAppDispatch();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();
    const { templateId } = useParams();
    
    const education = useAppSelector(state => state.userSlice.education);

    const form = useForm({
        defaultValues:  {
            education: education || [
                {
                    schoolName: '',
                    schoolLocation: '',
                    degree: '',
                    fieldOfStudy: '',
                    graduationMonth: 0,
                    endDate: 0,
                    id: Math.floor(Math.random() * 100).toString()

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
                endDate: item.endDate
            }
        })
        dispatch(setEducation(parsedEducation));
        router.push(`/builder/${templateId}/social`);
        dispatch(setProgress());
    
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
        console.log(controlledFields);
        
        dispatch(setEducation(controlledFields));
        console.log("fieldArray", fieldArray.fields);
        console.log("controlledField", controlledFields);

    }
    const handleAddMore = () => {
        const emptyField = {
            schoolName: '',
            schoolLocation: '',
            degree: '',
            fieldOfStudy: '',
            graduationMonth:0,
            endDate: 0,
            id: Math.floor(Math.random() * 100).toString()
        }
        fieldArray.append(emptyField)

    }

    const handleCollapsible = (id: string, isCurrentExpanded: boolean) => {
        console.log(id,isCurrentExpanded);
        
        if (isCurrentExpanded) {
            setCurrent(false)
        }
        else {
            setCurrent(id);
        }
    }
    useEffect(() => {
        setIsMounted(true);
        // setCurrent(controlledFields[0]?.id);
    }, [])
    useEffect(() => {
        if (education && education.length < controlledFields.length) {
            console.log("controlledFields", controlledFields);
            dispatch(setEducation(controlledFields));
            console.log(education);
        }
        // const currentFieldIndex = controlledFields.length - 1;
        // setCurrent(controlledFields[currentFieldIndex].id)
    }, [controlledFields.length]);

    if (!isMounted) return null;
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <main className="p-5">

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-10">

                        {
                            education && education.map((item, index) => {
                                return (
                                    <>
                                        <Collapsible
                                            onOpenChange={() => handleCollapsible(item.id, item.id === current)}
                                            className="w-[350px] space-y-2"
                                            open={true}
                                        >
                                            <CollapsibleTrigger asChild>
                                                <Button className="bg-blue-400 hover:bg-blue-300 w-full">
                                                    Delhi University
                                                    {/* {education?.[current + 1]?.schoolName || 'Delhi University'} */}
                                                </Button>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <div key={item.id} className="flex flex-col gap-5 border p-5">
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
                                                    <FormField
                                                        name={`education.${index}.endDate`}
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
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </>

                                )
                            })
                        }


                        <div className="flex gap-5">
                            <Button
                                type="submit"
                                ref={buttonRef}
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