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

const Field: FC<IForm> = ({ form, index }) => {
  return (
    <FormField
      name={`education.${index}.fieldOfStudy`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Field of Study</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} placeholder="" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Field;
