"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { HandleProps } from "@xyflow/react";
import { Handle } from "@xyflow/react";
import { Widgets } from "@mui/icons-material";
 
// import { BaseHandle } from "@/registry/components/base-handle";
 
function getFlexDirection(position: string) {
  const flexDirection =
    position === "top" || position === "bottom" ? "flex-col" : "flex-row";
  switch (position) {
    case "bottom":
    case "right":
      return flexDirection + "-reverse justify-end";
    default:
      return flexDirection;
  }
}
 
const LabeledHandle = React.forwardRef<
  HTMLDivElement,
  HandleProps &
    React.HTMLAttributes<HTMLDivElement> & {
      title: string;
      handleClassName?: string;
      labelClassName?: string;
    }
>(({ className, labelClassName, title, position, ...props }, ref) => (
  <div
    ref={ref}
    title={title}
    className={cn(
      "relative flex items-center",
      getFlexDirection(position),
      className,
    )}
  >
    <Handle position={position} {...props} />
    {/* <label className={`text-foreground ${labelClassName}`} style={{left: `0px`,width:"50px", fontSize:"5px"}}>{title}</label> */}

  </div>
));
 
LabeledHandle.displayName = "LabeledHandle";
 
export { LabeledHandle };