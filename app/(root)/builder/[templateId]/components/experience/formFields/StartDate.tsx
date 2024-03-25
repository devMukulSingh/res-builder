import { IForm } from '../ExperienceForm'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from 'react';

const StartDate:FC<IForm> = ({
    form,
    index
}) => {
  return (
    <FormField
      name={`experience.${index}.startDate`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Start Date</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} type="date" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default StartDate