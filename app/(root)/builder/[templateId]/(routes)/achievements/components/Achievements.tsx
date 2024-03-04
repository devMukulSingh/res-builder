'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Controller, FieldValue, FieldValues, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { setAchievements } from "@/redux/slice/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useFieldArray } from "react-hook-form";
import { useRef } from "react";

const AchievementsForm = () => {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();

    const { handleSubmit, control, watch, getValues } = useForm({
        defaultValues: {
            achievements: [
                { value: '' },
                { value: '' },
                { value: '' }
            ]
        }
    });
    const { fields, append } = useFieldArray({
        name: 'achievements',
        control
    })

    const watchFieldsArray = watch('achievements');

    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldsArray[index]
        }
    })

    const onSubmit = (data: FieldValues) => {
        const temp = data?.achievements.map((item) => item.value)
        dispatch(setAchievements(data.achievements));
    }

    const handleChange = () => {
        const achievements = getValues().achievements;
        const temp = achievements.map(item => item.value)
        dispatch(setAchievements(temp));
    }

    const handleAddMore = () => {
        append({ value: '' });
        if (buttonRef.current) {
            buttonRef.current.style.display = 'none'
        }
    }
    return (
        <main className="p-5">
            <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
                <div className="flex flex-col gap-5">
                    {
                        controlledFields.map((item, i) => {
                            return (
                                <>


                                    <Controller
                                        key={item.id}
                                        control={control}
                                        name={`achievements.${i}.value`}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                className="py-8 bg-white"
                                                placeholder="eg Certificate of Engineering" />
                                        )}
                                    />
                                </>
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
                        Submit
                    </Button>

                </div>
            </form>

        </main>
    )
}

export default AchievementsForm


{/* <FormField
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Achievement #2</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="py-8 bg-white" {...field}
                                            placeholder="eg Certificate of Engineering"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
{/* <FormField
                            control={form.control}
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Achievement #3</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="eg Certificate of Engineering"
                                            className="bg-white py-8 " {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}