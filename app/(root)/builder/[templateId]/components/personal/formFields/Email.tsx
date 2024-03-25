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

const Email: FC<IForm> = ({ form }) => {
  return (
    <FormField
      name="email"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Email;
