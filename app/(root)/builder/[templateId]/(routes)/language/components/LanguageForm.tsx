'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";

const LanguageForm = () => {

    const form = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <main className="p-5">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        
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

export default LanguageForm