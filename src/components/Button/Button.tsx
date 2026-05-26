import type ButtonProps from './Button.types';

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 text-white px-2.5 py-5 border-0 rounded-[5px] cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
