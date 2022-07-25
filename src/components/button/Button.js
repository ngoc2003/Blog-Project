import React from "react";
import PropTypes from "prop-types";

/**
 * @param {*} onClick Handler onClick
 * @required
 * @param {string} type Type of button 'button' || 'submit'
 */
const Button = ({
  disabled = false,
  children,
  className,
  fluid,
  type = "button",
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={` my-4 rounded-lg text-white font-bold p-3 min-w-[100px] ${
        !disabled
          ? "bg-primary "
          : "bg-slate-500 pointer-events-none cursor-not-allowed "
      } ${fluid && "w-full"} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
