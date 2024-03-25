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

const Degree: FC<IForm> = ({ form, index }) => {
  return (
    <FormField
      name={`education.${index}.degree`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Degree/Program</FormLabel>
          <FormControl>
            <Input
              placeholder="B.Sc in Computer Science"
              className="bg-white"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Degree;
