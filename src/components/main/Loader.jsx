import { Loader } from "lucide-react";

const LoaderComp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader className="animate-spin text-blue-600 mx-auto font-bold" size={45} />
    </div>
  );
};

export default LoaderComp;
