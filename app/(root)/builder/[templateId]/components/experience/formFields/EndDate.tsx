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

const EndDate: FC<IForm> = ({ form, index }) => {
  return (
    <FormField
      name={`experience.${index}.endDate`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>End Date</FormLabel>
          <FormControl>
            <Input
              placeholder="MM YY"
              type="date"
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

export default EndDate;
