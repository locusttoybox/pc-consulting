import React from 'react';

interface VariantStyle {
  [key: string]: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outlineWhite'
    | 'outlineBlack';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-full';

  const variantStyles: VariantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outlineWhite:
      'bg-transparent border-2 border-white text-white hover:bg-black-10 hover:border-accent',
    outlineBlack:
      'bg-transparent border-2 border-black text-black hover:bg-black-10',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
