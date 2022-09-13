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
  primary,
  secondary,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={` my-4 rounded-lg hover:opacity-90 transition-all  font-bold p-3 min-w-[100px] ${
        primary && "text-white bg-primary"
      } ${className} ${
        disabled &&
        "bg-slate-500 text-secondary pointer-events-none cursor-not-allowed "
      } ${fluid && "w-full"} ${secondary && "text-secondary bg-white"} `}
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
