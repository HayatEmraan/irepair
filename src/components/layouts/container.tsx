import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return (
    <div className={cn("w-full h-full max-w-[1240px] mx-auto p-4", className)}>
      {children}
    </div>
  );
};

export default Container;
