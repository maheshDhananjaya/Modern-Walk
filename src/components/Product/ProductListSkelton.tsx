import { Skeleton } from "@/components/ui/skeleton";

export default function ProductListSkeleton() {
  return (
    <div className="px-30 py-32 animate-pulse">
      <div className="flex flex-row gap-2.5 mb-16 items-center">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-8" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="flex flex-row justify-between items-center pb-16 border-b mb-16">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-8 w-20" />
      </div>

      <div className="flex flex-row gap-6 grid grid-cols-4">
        <div className="flex flex-col">
          <Skeleton className="h-6 w-24 mb-6" />
          <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-row items-center gap-2 p-1.5">
                <Skeleton className="h-4 w-4 rounded-sm" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>

        <div className="gap-6 grid grid-cols-3 col-span-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden flex flex-col"
            >
              <Skeleton className="h-52 w-full" />
              <div className="p-4 flex flex-col gap-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-32 flex justify-center gap-4">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>
    </div>
  );
}
