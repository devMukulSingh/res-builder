import React, { FC, useState } from "react";
import { countryCodes } from "@/lib/constants";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { IForm } from "../PersonalForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const CountryCode: FC<IForm> = ({ form }) => {
    const [open, setOpen] = useState(false);

  return (
    <FormField
      name="countryCode"
      control={form.control}
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Country Code</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="ghost"
                  role="combobox"
                  className={cn(
                    "w-[200px] bg-white justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? countryCodes.find(
                        (countryCode) => countryCode.mobileCode === field.value
                      )?.mobileCode
                    : "Select country code"}
                </Button>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-[] p-0">
              <Command>
                <CommandInput
                  placeholder="Search country code..."
                  className="h-9"
                />
                <CommandEmpty>No country code found.</CommandEmpty>
                <CommandGroup>
                  <ScrollArea className="h-72 rounded-md border">
                    {countryCodes.map((code) => (
                      <CommandItem
                        key={code.name}
                        value={code.name}
                        onSelect={() => {
                          form.setValue("countryCode", code.mobileCode);
                          setOpen(false);
                        }}
                      >
                        {code.mobileCode} ({code.name})
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            code.mobileCode === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CountryCode;
