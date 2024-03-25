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

const BirthPlace: FC<IForm> = ({ form }) => {
  return (
    <FormField
      name="birthPlace"
      control={form.control}
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Birth Place</FormLabel>
          <FormControl>
            <Input className="bg-white" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BirthPlace;
