

function Button({
  className = "",
  variant = "primary",
  label,
  icon,
  type = "button",
  onClick,
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-[3px] font-normal transition-colors cursor-pointer text-xs py-1.5 px-3 shadow-sm";

  const variants = {
    primary: "bg-[#007bff] hover:bg-blue-600 text-white",
    success: "bg-[#28a745] hover:bg-green-600 text-white",
    danger: "bg-red-600 hover:bg-red-500 text-white",
    normal: "bg-gray-300 hover:bg-gray-400 text-gray-950",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {label || children}
    </button>
  );
}

export default Button;

// function Button({
//   className = "",
//   variant = "primary",
//   label,
//   icon,
//   type = "button",
//   onClick,
//   ...props
// }) {
//   const baseStyles =
//     "inline-flex items-center justify-center rounded-[2px] transition-colors cursor-pointer";

//   const variants = {
//     primary: "bg-blue-500 hover:bg-blue-600 text-white",
//     danger: "bg-red-500 hover:bg-red-600 text-white",
//     normal: "bg-gray-300 hover:bg-gray-400 text-gray-950",
//   };

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {icon && <span className="mr-1.5">{icon}</span>}
//       {label}
//     </button>
//   );
// }

// export default Button;

// function Button({
//   paddingX,
//   paddingY,
//   rounded,
//   bgColor,
//   bgHover,
//   pointer,
//   lableCol,
//   label,
//   icon,
// }) {
//   return (
//     <button
//       className={`px-${paddingX} py-${paddingY} text-${lableCol} rounded-[${rounded}] bg-${bgColor} hover:bg-${bgHover} transition-colors ${pointer ? "cursor-pointer" : ""} ${icon && "flex items-center gap-1"}`}
//     >
//       {icon} {label}
//     </button>
//   );
// }

// export default Button;
