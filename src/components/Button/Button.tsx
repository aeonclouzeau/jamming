import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div>
      <button className="flex" type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
