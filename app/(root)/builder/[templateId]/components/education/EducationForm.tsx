"use client";
import { Form } from "@/components/ui/form";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setEducation } from "@/redux/slice/userSlice";
import { useEffect, useState } from "react";
import { Ieducation } from "@/lib/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/userSlice";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import { setFormComp } from "@/redux/slice/commonSlice";
import { motion } from "framer-motion";
import SchoolName from "./formFields/SchoolName";
import SchoolLocation from "./formFields/SchoolLocation";
import Degree from "./formFields/Degree";
import Field from "./formFields/Field";
import Percentage from "./formFields/Percentage";
import StartDate from "./formFields/StartDate";
import EndDate from "./formFields/EndDate";

export interface IForm {
  form: UseFormReturn<
    {
      education: Ieducation[];
    },
    any,
    undefined
  >;
  index: number;
}
const EducationForm = () => {
  const [expanded, setExpanded] = useState<string | false>("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { templateId } = useParams();
  const progress = useAppSelector((state) => state.persistedReducer.progress);
  const education = useAppSelector((state) => state.persistedReducer.education);

  const form = useForm({
    defaultValues: {
      education: education || [
        {
          schoolName: "",
          schoolLocation: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
          id: Math.floor(Math.random() * 100).toString(),
          percentage: 0,
        },
      ],
    },
  });

  const fieldArray = useFieldArray({
    name: "education",
    control: form.control,
  });
  const watchFieldsArray = form.watch("education");

  const controlledFields = fieldArray.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldsArray[index],
    };
  });

  const onSubmit = () => {
    dispatch(setFormComp("Social Links"));
    if (progress <= 46) {
      dispatch(setProgress());
    }
  };
  const handleChange = () => {
    const education = form.getValues().education;
    const parsedEducation = education.map((item) => {
      return {
        schoolName: item.schoolName,
        schoolLocation: item.schoolLocation,
        degree: item.degree,
        fieldOfStudy: item.fieldOfStudy,
        startDate: item.startDate,
        endDate: item.endDate,
        id: item.id,
        percentage: item.percentage,
      };
    });

    dispatch(setEducation(parsedEducation));
  };
  const handleAddMore = () => {
    const emptyField = {
      schoolName: "",
      schoolLocation: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      percentage: 0,
      id: Math.floor(Math.random() * 100).toString(),
    };
    fieldArray.append(emptyField);
  };

  const handleCollapsible = (id: string, isExpanded: boolean) => {
    if (isExpanded) {
      setExpanded(false);
    } else {
      setExpanded(id);
    }
  };

  const handleDelete = (index: number) => {
    if (controlledFields.length > 0) {
      fieldArray.remove(index);
    }
  };
  useEffect(() => {
    setExpanded(controlledFields[0]?.id);
  }, []);

  useEffect(() => {
    //handling add more functionality
    if (!education || education.length < controlledFields.length) {
      dispatch(setEducation(controlledFields));
      const expandedFieldIndex = controlledFields.length - 1;
      setExpanded(controlledFields[expandedFieldIndex].id);
    }
    //handling delete collapsible
    else if (education && education.length > controlledFields.length) {
      console.log("else", controlledFields);

      if (controlledFields.length > 0) {
        dispatch(setEducation(controlledFields));
      } else {
        toast.error("Profile should have at least one education field");
      }
    }
  }, [controlledFields.length]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <motion.div
      animate={{ x: 1, opacity: [0, 1] }}
      initial={{ x: -150, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
            <div className="flex flex-col gap-10">
              {(!education ? controlledFields : education)?.map(
                (item: Ieducation, index: number) => {
                  return (
                    <>
                      <Collapsible
                        onOpenChange={() =>
                          handleCollapsible(item.id, item.id === expanded)
                        }
                        className="space-y-2 transition"
                        open={item.id === expanded}
                      >
                        <div className="flex transition text-neutral-100 hover:bg-red-300 items-center bg-red-400 px-5">
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full hover:bg-red-300"
                            >
                              {education?.[index]?.schoolName || "University"}
                            </Button>
                          </CollapsibleTrigger>
                          <Trash
                            className="ml-auto cursor-pointer text-neutral-200"
                            onClick={() => handleDelete(index)}
                          />
                        </div>
                        <CollapsibleContent
                          key={item.id}
                          className={`flex
                                                     flex-col
                                                      gap-5
                                                       border 
                                                       p-5 
                                                       transition-transform 
                                                       data-[state=open]:animate-accordion-down 
                                                       `}
                        >
                          <SchoolName form={form} index={index} />

                          <SchoolLocation form={form} index={index} />

                          <Degree form={form} index={index} />

                          <Field form={form} index={index} />

                          <Percentage form={form} index={index} />

                          <StartDate form={form} index={index} />

                          <EndDate form={form} index={index} />
                        </CollapsibleContent>
                      </Collapsible>
                    </>
                  );
                },
              )}

              <div className="flex gap-5">
                <Button
                  type="button"
                  onClick={handleAddMore}
                  className="w-full"
                >
                  Add More
                </Button>
                <Button type="submit" className="w-full">
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default EducationForm;
