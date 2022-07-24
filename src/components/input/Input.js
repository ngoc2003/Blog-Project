import React from "react";

const Input = ({
  name = "",
  type = "text",
  children,
  className,
  control,
  ...props
}) => {
  return (
    <div className="relative mb-8">
      <input
        className={`w-full bg-slate-200 focus:bg-white transition ease-in-out duration-300  outline-none border focus:border-primary focus:rounded-lg p-3 text-xl ${className} ${
          children && "pr-10"
        }`}
        type={type}
        id={name}
        control={control}
        name={name}
        defaultValue=""
        {...props}
      />
      {children && (
        <span className="cursor-pointer hover:text-secondary transition ease-in-out duration-300 text-slate-400 absolute bottom-[50%] right-0 translate-y-1/2 text-2xl mr-2">
          {children}
        </span>
      )}
    </div>
  );
};

export default Input;
