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

const Role:FC<IForm> = ({
    form,
    index
}) => {
  return (
    <FormField
      name={`experience.${index}.role`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Role</FormLabel>
          <FormControl>
            <Input
              placeholder="Jr. Frontend Developer"
              className="bg-white"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Role