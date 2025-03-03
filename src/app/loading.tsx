import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div className="fixed size-full grid place-items-center z-50 bg-background/95 ">
      <div className="w-full flex items-center justify-center flex-col gap-2">
        <Loader2 className="animate-spin size-10 text-primary" />
        <p className="text-3xl font-bold animate-pulse">شركة ام جي</p>
      </div>
    </div>
  );
};

export default loading;
