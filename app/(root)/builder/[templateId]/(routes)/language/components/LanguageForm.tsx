'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages, strengths } from "@/lib/constants";
import { PlusCircle } from "lucide-react";

const LanguageForm = () => {

    const form = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5 ">

                        <div className="flex gap-2 ">
                            <FormField
                                name='language1'
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
                                name="strength"
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

                        <div className="flex gap-2">
                            <FormField
                                name='language2'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-1/2">
                                        <FormLabel>Language</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}

                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-white">
                                                    <SelectValue placeholder="language" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    languages.map((language) => (
                                                        <SelectItem
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
                                name="strength"
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

                        <div className="flex gap-2">
                            <FormField
                                name='language3'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-1/2">
                                        <FormLabel>Language</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}

                                        >
                                            <FormControl>
                                                <SelectTrigger className="bg-white">
                                                    <SelectValue placeholder="language" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    languages.map((language) => (
                                                        <SelectItem
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
                                name="strength"
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
                        <Button
                            variant="ghost"
                            className="self-start flex items-center gap-2 bg-transparent"
                        >
                            <PlusCircle />
                            Add more language
                        </Button>
                        <Button
                            type="submit"
                            className="w-2/3 self-center mt-20">
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </main>
    )
}

export default LanguageForm