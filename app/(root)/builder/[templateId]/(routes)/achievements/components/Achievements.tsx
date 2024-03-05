'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { setAchievements } from "@/redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useFieldArray } from "react-hook-form";
import { useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/rootSlice";

const AchievementsForm = () => {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { templateId } = useParams();
    const progress = useAppSelector(state => state.rootSlice.progress);


    const form = useForm({
        defaultValues: {
            achievements: [
                { value: '' },
                { value: '' },
                { value: '' }
            ]
        }
    });
    const fieldArray = useFieldArray({
        name: 'achievements',
        control: form.control
    })

    const watchFieldsArray = form.watch('achievements');

    const controlledFields = fieldArray.fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldsArray[index]
        }
    })

    const onSubmit = (data: FieldValues) => {
        const parsedAchievements = data?.achievements.map((item: { value: string, id: string }) => item.value)
        dispatch(setAchievements(parsedAchievements));
        router.push(`/builder/${templateId}/language`);
        if (progress <= 82) {
            dispatch(setProgress())
        }

    }

    const handleChange = () => {
        const achievements = form.getValues().achievements;
        const parsedAchievements = achievements.map(item => item.value);
        dispatch(setAchievements(parsedAchievements));
    }

    const handleAddMore = () => {
        fieldArray.append({ value: '' });

    }
    return (
        <main className="p-5">
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
                    <div className="flex flex-col gap-5">
                        {
                            controlledFields.map((item, i) => {
                                return (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name={`achievements.${i}.value`}
                                        render={({ field }) => (
                                            <FormItem >
                                                <FormLabel>{`Achievement#${i + 1}`}</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className="py-8 bg-white" {...field}
                                                        placeholder="eg Certificate of Engineering"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )
                            })

                        }

                        <Button
                            ref={buttonRef}
                            variant="ghost"
                            onClick={handleAddMore}
                            className="flex mr-auto items-center gap-2 bg-transparent"
                        >
                            <PlusCircle />
                            Add Achievement/License
                        </Button>
                        <Button
                            type="submit"
                            className="w-full mt-20 py-6">
                            Next
                        </Button>

                    </div>
                </form>
            </Form>

        </main>
    )
}

export default AchievementsForm


