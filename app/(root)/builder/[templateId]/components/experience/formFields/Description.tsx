import { IForm } from "../ExperienceForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import dynamic from "next/dynamic";
import { FC } from "react";
const RichTextEditor = dynamic(
  () => import("@/components/commons/RichTextEditor"),
  {
    ssr: false,
  },
);
const Description: FC<IForm> = ({ form, index, handleChange }) => {
  return (
    <FormField
      defaultValue="Creative Frontend Developer with expertise in HTML, CSS, and JavaScript. Proven ability to transform design concepts into responsive web applications. Passionate about delivering visually appealing and user-centric experiences"
      name={`experience.${index}.description`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <RichTextEditor
              value={field.value || ""}
              onChange={(content) => {
                field.onChange(content);
                handleChange && handleChange();
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Description;
