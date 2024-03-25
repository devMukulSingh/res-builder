import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { IForm } from "../EducationForm";

const StartDate:FC<IForm> = ({
    form,
    index
}) => {
  return (
    <FormField
      defaultValue="2018-05"
      name={`education.${index}.startDate`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Start Date</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} type="month" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default StartDate