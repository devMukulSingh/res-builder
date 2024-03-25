"use client";
import { Form } from "@/components/ui/form";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { setPersonalInfo } from "@/redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setFormComp } from "@/redux/slice/commonSlice";
import { motion } from "framer-motion";
import { setProgress } from "@/redux/slice/userSlice";
import Name from "./formFields/Name";
import Email from "./formFields/Email";
import Profession from "./formFields/Profession";
import Address from "./formFields/Address";
import Mobile from "./formFields/Mobile";
import City from "./formFields/City";
import State from "./formFields/State";
import DOB from "./formFields/DOB";
import BirthPlace from "./formFields/BirthPlace";
import dynamic from "next/dynamic";
import FieldSkeleton from "./FieldSkeleton";
const CountryCode = dynamic(() => import("./formFields/CountryCode"), {
  loading: () => <FieldSkeleton />,
});

export interface IForm {
  form: UseFormReturn<
    {
      fullName: string;
      email: string;
      profession: string;
      address: string;
      countryCode: string;
      mobile: string;
      state: string;
      birthPlace: string;
      city: string;
      dob?: any;
    },
    any,
    undefined
  >;
}

const PersonalForm = () => {
  const dispatch = useAppDispatch();

  const schema = z.object({
    fullName: z
      .string()
      .min(3, {
        message: "Name should be minimum 3 characters",
      })
      .max(30, {
        message: "Name should be max 30 characters",
      }),
    email: z.string().email({
      message: "Please enter valid email",
    }),
    profession: z
      .string()
      .min(3, {
        message: "Profession should be minimum 5 characters",
      })
      .max(30, {
        message: "Profession should be max 30 characters",
      }),
    address: z
      .string()
      .min(5, {
        message: "Address should be minimum 5 characters",
      })
      .max(30, {
        message: "Address should be max 30 characters",
      }),
    countryCode: z.string().min(2, {
      message: "CountryCode should be minimum 2 numbers",
    }),
    mobile: z.string().min(10, {
      message: "Mobile no should be minimum 10 numbers",
    }),
    city: z
      .string()
      .min(3, {
        message: "City should be minimum 3 characters",
      })
      .max(20, {
        message: "City should be max 20 characters",
      }),
    state: z
      .string()
      .min(3, {
        message: "State should be minimum 3 characters",
      })
      .max(20, {
        message: "State should be max 20 characters",
      }),
    dob: z.any(),
    birthPlace: z
      .string()
      .min(3, {
        message: "BirthPlace should be minimum 3 characters",
      })
      .max(20, {
        message: "BirthPlace should be max 20 characters",
      }),
  });

  type formSchema = z.infer<typeof schema>;
  const personalInfo = useAppSelector(
    (state) => state.persistedReducer.personalInfo,
  );
  const progress = useAppSelector((state) => state.persistedReducer.progress);

  const form = useForm<formSchema>({
    resolver: zodResolver(schema),
    defaultValues: personalInfo || {
      address: "",
      birthPlace: "",
      city: "",
      countryCode: "+91",
      dob: "",
      email: "",
      fullName: "",
      mobile: "",
      profession: "",
      state: "",
    },
  });

  const onSubmit = () => {
    dispatch(setFormComp("Experience"));
    if (progress <= 10) {
      dispatch(setProgress());
    }
  };
  const handleChange = () => {
    dispatch(setPersonalInfo(form.getValues()));
  };

  return (
    <motion.div
      animate={{ x: 1, opacity: [0, 1] }}
      initial={{ x: -150, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-5">
        <Form {...form}>
          <form onChange={handleChange} onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <Name form={form} />

              <Email form={form} />

              <Profession form={form} />

              <Address form={form} />

              <div className="flex gap-5 w-full">
                <CountryCode form={form} />
                <Mobile form={form} />
              </div>

              <div className="flex gap-5">
                <City form={form} />
                <State form={form} />
              </div>

              <div className="flex gap-5 w-full">
                <DOB form={form} />
                <BirthPlace form={form} />
              </div>

              <Button type="submit" className="w-full">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default PersonalForm;
