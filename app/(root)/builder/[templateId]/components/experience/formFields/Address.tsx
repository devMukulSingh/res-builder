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

const Address:FC<IForm> = ({
    form,
    index
}) => {
  return (
    <FormField
      name={`experience.${index}.address`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Address