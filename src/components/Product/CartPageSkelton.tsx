import { Skeleton } from "@/components/ui/skeleton";

export const CartPageSkeleton = () => {
  return (
    <div className="px-30 py-32 animate-pulse">
      <div className="flex flex-row pb-16 gap-2.5 items-center">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-10" />
      </div>

      <div className="pb-16 border-b mb-16">
        <Skeleton className="h-8 w-48" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-4 h-120 overflow-scroll overflow-x-hidden scrollbar-hide">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex flex-row gap-4 p-4 border rounded-xl bg-muted"
            >
              <Skeleton className="h-28 w-28 rounded-lg" />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <Skeleton className="h-5 w-48 mb-2" />
                  <Skeleton className="h-4 w-32 mb-1" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1 flex flex-col p-8 border rounded-xl h-min bg-muted">
          <Skeleton className="h-7 w-36 mb-9" />
          <div className="space-y-4 mb-9">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>

      <div className="mt-32">
        <Skeleton className="h-8 w-56 mb-8" />
        <div className="grid grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
