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

const CompanyName: FC<IForm> = ({ form, index }) => {
  return (
    <FormField
      name={`experience.${index}.companyName`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} placeholder="Rangam" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CompanyName;
