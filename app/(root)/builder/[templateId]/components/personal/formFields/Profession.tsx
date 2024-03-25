import React, { FC } from "react";
import { Input } from "@/components/ui/input";
import { IForm } from "../PersonalForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Profession: FC<IForm> = ({ form }) => {
  return (
    <FormField
      name="profession"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Profession</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Profession;
