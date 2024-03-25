"use client";
import {Form} from "@/components/ui/form";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { setExperience } from "@/redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";
import { PlusCircle, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { setProgress } from "@/redux/slice/userSlice";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import toast from "react-hot-toast";
import { setFormComp } from "@/redux/slice/commonSlice";
import { motion } from "framer-motion";
import { Iexperience } from "@/lib/types";
import CompanyName from "./formFields/CompanyName";
import Employer from "./formFields/Employer";
import Role from "./formFields/Role";
import Address from "./formFields/Address";
import Description from "./formFields/Description";
import StartDate from "./formFields/StartDate";
import CheckboxWorkingStatus from "./formFields/CheckboxWorkingStatus";
import EndDate from "./formFields/EndDate";

export interface IForm {
  form: UseFormReturn<{
    experience:Iexperience[]
  }, any, undefined>;
  index: number;
  handleChange?: () => void;
}

const ExperienceForm = () => {
  const { templateId } = useParams();
  const progress = useAppSelector((state) => state.persistedReducer.progress);
  const [expanded, setExpanded] = useState<string | false>("");
  const dispatch = useAppDispatch();
  const experience = useAppSelector(
    (state) => state.persistedReducer.experience
  );

  const form = useForm({
    defaultValues: {
      experience: experience || [
        {
          companyName: "",
          employer: "",
          role: "",
          address: "",
          startDate: "",
          endDate: "",
          checkbox: false,
          bio: "",
          description: "",
          id: Math.floor(Math.random() * 100).toString(),
        },
      ],
    },
  });

  const fieldArray = useFieldArray({
    name: "experience",
    control: form.control,
  });

  const watchFieldsArray = form.watch("experience");

  const controlledFields = fieldArray.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldsArray[index],
    };
  });

  const onSubmit = () => {
    dispatch(setFormComp("Skills"));
    if (progress <= 22) {
      dispatch(setProgress());
    }
  };
  const handleChange = () => {
    const experience = form.getValues().experience;

    const parsedExperience = experience.map((item) => {
      return {
        companyName: item.companyName,
        employer: item.employer,
        role: item.role,
        address: item.address,
        startDate: item.startDate,
        endDate: item.endDate,
        checkbox: item.checkbox,
        id: item.id,
        description: item.description,
      };
    });
    dispatch(setExperience(parsedExperience));
  };

  const handleAddMore = () => {
    fieldArray.append({
      companyName: "",
      employer: "",
      role: "",
      address: "",
      startDate: "",
      endDate: "",
      checkbox: false,
      bio: "",
      description: "",
      id: Math.floor(Math.random() * 100).toString(),
    });
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
    if (!experience || experience.length < controlledFields.length) {
      dispatch(setExperience(controlledFields));
      const expandedFieldIndex = controlledFields.length - 1;
      setExpanded(controlledFields[expandedFieldIndex].id);
    }
    //handling delete collapsible
    else if (experience && experience.length > controlledFields.length) {
      if (controlledFields.length > 0) {
        dispatch(setExperience(controlledFields));
      } else {
        toast.error("Profile should have at least one experience field");
      }
    }
  }, [controlledFields.length]);

  return (
    <motion.div
      animate={{ x: 1, opacity: [0, 1] }}
      initial={{ x: -150, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleChange}>
            <div className="flex flex-col gap-5 ">
              {(!experience ? controlledFields : experience)?.map(
                (item, index) => {
                  return (
                    <Collapsible
                      key={index}
                      onOpenChange={() =>
                        handleCollapsible(item.id, item.id === expanded)
                      }
                      className={`space-y-2`}
                      open={item.id === expanded}
                    >
                      <div className="flex hover:bg-red-300 items-center bg-red-400 px-5">
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full hover:bg-red-300 text-neutral-100"
                          >
                            {experience?.[index].companyName || "Company"}
                          </Button>
                        </CollapsibleTrigger>
                        <Trash
                          className="ml-auto cursor-pointer text-neutral-200"
                          onClick={() => handleDelete(index)}
                        />
                      </div>

                      <CollapsibleContent
                        className={`flex
                                                 flex-col
                                                  gap-5
                                                   border 
                                                   p-5 
                                                   transition-transform 
                                                   data-[state=open]:animate-accordion-down 
                                                   `}
                        key={item.id}
                      >
                        <CompanyName form={form} index={index} />

                        <Employer form={form} index={index} />

                        <Role form={form} index={index} />

                        <Address form={form} index={index} />

                        <Description
                          form={form}
                          index={index}
                          handleChange={handleChange}
                        />

                        <div className="flex gap-5 mt-10">
                          <StartDate form={form} index={index} />
                          {experience && !experience?.[index]?.checkbox && (
                            <EndDate form={form} index={index} />
                          )}
                        </div>
                        
                        <CheckboxWorkingStatus form={form} index={index} />
                      </CollapsibleContent>
                    </Collapsible>
                  );
                }
              )}

              <Button
                onClick={handleAddMore}
                type="button"
                variant="ghost"
                className="gap-2 self-start bg-transparent mt-5"
              >
                <PlusCircle />
                Add More
              </Button>

              <Button type="submit" className="w-full py-6 mt-5">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default ExperienceForm;
