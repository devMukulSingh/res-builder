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

const SchoolLocation:FC<IForm> = ({
    form,
    index
}) => {
  return (
    <FormField
      name={`education.${index}.schoolLocation`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>School Location</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} placeholder="New Delhi" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SchoolLocation