import { ErrorMessage, Field, useField } from "formik";
import React, { useEffect } from "react";

interface IProps {
  label?: string;
  type?: string;
  name: string;
  className?: string;
  placeHolder?: string;
  disabled?: boolean;
  // onChange?:(value:string)=>void;
  props?: {
    [x: string]: any;
  };
  containerClass?: string;
}

export const ApTextInput: React.FC<IProps> = ({
  label,
  type,
  name,
  className,
  placeHolder,
  containerClass,
  disabled,
  ...props
}) => {
  const [field, meta] = useField(name);

  useEffect(() => {
    // console.log(field);
  }, [field]);

  return (
    <div
      style={{ marginBottom: 10, display: "", flexDirection: "column" }}
      className={containerClass}
    >
      {
        <label className="label mb-2" htmlFor="email">
          {label}
        </label>
      }

      {type == "textarea" ? (
        <textarea
          className={`form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none
        ${className}`}
          {...field}
          {...props}
          name={name}
          rows={4}
          placeholder={placeHolder}
        ></textarea>
      ) : (
        <Field
          type={type}
          {...field}
          {...props}
          name={name}
          disabled={disabled || false}
          className={`form-control
          block
          w-full
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-gray-200 focus:outline-none
        
          ${className}`}
          placeholder={placeHolder}
        />
      )}

      <ErrorMessage className="text-red-500" name={name} component="div" />
    </div>
  );
};