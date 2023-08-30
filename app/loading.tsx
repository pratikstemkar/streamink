import { Loader2 } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex w-full justify-center items-center">
      <Loader2 className="animate-spin h-10 w-10" />
    </main>
  );
}
