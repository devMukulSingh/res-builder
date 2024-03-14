import { Skeleton } from "@/components/ui/skeleton"

const BioSkeleton = () => {
  return (
    <>
      <li className="flex flex-col">
        <Skeleton className="h-8 w-full" />
      </li>
      <li className="flex flex-col">
        <Skeleton className="h-8 w-full" />
      </li>
      <li className="flex flex-col">
        <Skeleton className="h-8 w-full" />
      </li>
      <li className="flex flex-col">
        <Skeleton className="h-8 w-full" />
      </li>
    </>
  )
}

export default BioSkeleton