import { IForm } from "../ExperienceForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";

const Employer: FC<IForm> = ({ form, index }) => {
  return (
    <FormField
      name={`experience.${index}.employer`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Employer</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} placeholder="rangam.com" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Employer;
