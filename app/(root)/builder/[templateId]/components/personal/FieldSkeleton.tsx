import { FormLabel } from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";

const FieldSkeleton = () => {
  return (
    <div className="flex flex-col mt-auto gap-3">
      <FormLabel className="">Country Code</FormLabel>
      <Skeleton className="h-10 w-[13rem] bg-neutral-200" />
    </div>
  );
};

export default FieldSkeleton;
