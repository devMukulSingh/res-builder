import { Checkbox } from "@/components/ui/checkbox";
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

const CheckboxWorkingStatus: FC<IForm> = ({ form, index }) => {
  return (
    <FormField
      name={`experience.${index}.checkbox`}
      control={form.control}
      render={({ field }) => (
        <FormItem className="flex items-center gap-4">
          <FormControl>
            <Checkbox
              className="size-6"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel>Currently working here</FormLabel>
        </FormItem>
      )}
    />
  );
};

export default CheckboxWorkingStatus;
