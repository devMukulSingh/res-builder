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

const Percentage:FC<IForm> = ({
    form,
    index
}) => {
  return (
    <FormField
      name={`education.${index}.percentage`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>GPA/Percentage</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} placeholder="88%" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Percentage