import { Skeleton } from "@/components/ui/skeleton";

export default function LandingPageSkeleton() {
  return (
    <div className="flex min-h-screen flex-col animate-pulse">
      <div className="grid grid-cols-2 items-center px-30 py-16 gap-8">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-10 w-32 mt-4" />
          <div className="flex flex-row mt-16 gap-6 items-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>
        <Skeleton className="h-80 w-full rounded-xl" /> {/* Hero image */}
      </div>

      <div className="px-30 py-32">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-36" />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <Skeleton className="h-52 w-full rounded-xl" />
          <div className="flex flex-col gap-6">
            <Skeleton className="h-24 w-full rounded-xl" />
            <Skeleton className="h-24 w-full rounded-xl" />
          </div>
        </div>
      </div>

      {Array.from({ length: 3 }).map((_, section) => (
        <div className="px-30 pb-32" key={section}>
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 border rounded-xl overflow-hidden"
              >
                <Skeleton className="h-52 w-full" />
                <Skeleton className="h-5 w-3/4 p-2" />
                <Skeleton className="h-4 w-1/2 p-2" />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="px-30 pb-32 h-80">
        <div className="flex flex-col justify-between bg-muted px-16 py-8 rounded-xl">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>

      <div className="px-30 pb-32 h-40">
        <div className="flex flex-row justify-between bg-black px-16 py-8 rounded-xl">
          <Skeleton className="h-12 w-64" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-64 rounded-md" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
