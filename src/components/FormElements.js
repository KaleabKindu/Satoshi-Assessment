import React from "react";
import clsx from "clsx";
export const FormLabel = ({
  className,
  children,
  error,
}) => {
  return (
    <label
      className={clsx({
        "text-red-500": error,
      }, className)}
    >
      <span className="text-base font-medium">{children}</span>
    </label>
  );
};

export const FormError = ({
  children,
  show,
}) => {
  return (
    <div
      className={clsx("flex gap-2 mt-1 items-center text-red-500", {
        hidden: !show,
      })}
    >
      <p className="text-sm">{children}</p>
      <span className="opacity-0">*</span>
    </div>
  );
};
