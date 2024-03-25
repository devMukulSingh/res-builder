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

const EndDate:FC<IForm> = ({
    form,
    index
}) => {
  return (
    <FormField
      defaultValue="2018-05"
      name={`education.${index}.endDate`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>End Date</FormLabel>
          <FormControl>
            <Input type="month" className="bg-white" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default EndDate