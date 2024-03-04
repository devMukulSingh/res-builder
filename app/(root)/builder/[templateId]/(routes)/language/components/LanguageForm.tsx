'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FieldValues, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages, strengths } from "@/lib/constants";
import { PlusCircle } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useRef } from "react";
import { setLanguages } from "@/redux/slice/userSlice";

const LanguageForm = () => {

    const dispatch = useAppDispatch();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const form = useForm({
        defaultValues: {
            languageInfo: [
                { language: '', strength: '' },
                { language: '', strength: '' },
                { language: '', strength: '' }
            ]
        }
    });

    const fieldArray = useFieldArray({
        name: 'languageInfo',
        control: form.control
    })

    const watchFieldsArray = form.watch('languageInfo');

    const onSubmit = (data: FieldValues) => {
        const languageInfo = data.languageInfo;
        const parsedLanguage = languageInfo.map((item: { language: string, strength: string }) => {
            return {
                language: item.language,
                strength: item.strength
            }
        })
        dispatch(setLanguages(parsedLanguage));

    }

    const handleChange = () => {
        const languageInfo = form.getValues().languageInfo;
        const parsedLanguage = languageInfo.map(item => {
            return {
                language: item.language,
                strength: item.strength
            }
        })
        dispatch(setLanguages(parsedLanguage));
    }

    const controlledFields = fieldArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldsArray[index]
        }
    })


    const handleAddMore = () => {
        fieldArray.append({ language: '', strength: '' });
        if (buttonRef.current) {
            // buttonRef.current.style.display = 'none'
        }
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-5 ">
                        {
                            controlledFields.map((item, index) => {
                                return (
                                    <div className="flex gap-2 " key={item.id}>
                                        <FormField
                                            name={`languageInfo.${index}.language`}
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="w-1/2 ">
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        value={field.value}

                                                    >
                                                        <FormLabel>Language</FormLabel>
                                                        <FormControl>
                                                            <SelectTrigger className="bg-white" >
                                                                <SelectValue placeholder="language" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {
                                                                languages.map((language) => (
                                                                    <SelectItem
                                                                        key={language}
                                                                        value={language}
                                                                    >
                                                                        {language}
                                                                    </SelectItem>

                                                                ))
                                                            }
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}

                                        />
                                        <FormField
                                            name={`languageInfo.${index}.strength`}
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="w-1/2">
                                                    <FormLabel>Strength</FormLabel>
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
                                                                strengths.map((strength) => (
                                                                    <SelectItem
                                                                        key={strength}
                                                                        value={strength}
                                                                    >
                                                                        {strength}
                                                                    </SelectItem>
                                                                ))
                                                            }
                                                        </SelectContent>
                                                    </Select>
                                                </FormItem>
                                            )}

                                        />
                                    </div>
                                )
                            })

                        }


                        <Button
                            ref={buttonRef}
                            onClick={handleAddMore}
                            variant="ghost"
                            className="self-start flex items-center gap-2 bg-transparent"
                        >
                            <PlusCircle />
                            Add more language
                        </Button>
                        <Button
                            type="submit"
                            className="w-full py-6 self-center mt-20">
                            Next
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default LanguageForm