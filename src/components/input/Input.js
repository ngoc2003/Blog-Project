import React from "react";

const Input = ({
  name = "",
  type = "text",
  children,
  className,
  ref,
  hasFocus,
  ...props
}) => {
  return (
    <div className="relative mb-6 field">
      <input
        onFocus={() => hasFocus(true)}
        onBlur={() => hasFocus(false)}
        className={`flex-1 bg-slate-200 focus:bg-white transition ease-in-out duration-300  outline-none border focus:border-primary focus:rounded-lg p-3 text-xl ${className} ${
          children && "pr-10"
        }`}
        type={type}
        id={name}
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
