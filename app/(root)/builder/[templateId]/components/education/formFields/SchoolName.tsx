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

const SchoolName: FC<IForm> = ({ form, index }) => {
  return (
    <FormField
      name={`education.${index}.schoolName`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>School Name</FormLabel>
          <FormControl>
            <Input
              className="bg-white"
              {...field}
              placeholder="Delhi University"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SchoolName;
