import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "normal" | "circle";
};

const Button = ({
  children,
  onClick,
  title,
  variant = "normal",
  ...rest
}: Props) => {
  const variantMap = {
    normal: "",
    circle: "aspect-square p-0",
  };

  return (
    <div>
      <button
        title={title}
        className={`flex gap-2 rounded-full border-2 p-3 h-10 items-center justify-center font-semibold border-neutral-800 hover:border-purple-400 hover:bg-purple-400 hover:text-neutral-800 transition-all ease-in-out duration-300 ${variantMap[variant]}`}
        type="button"
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
