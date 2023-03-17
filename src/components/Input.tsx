import { useState } from "react";

type InputProps = {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  label: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  showPassword?: boolean;
  [x: string]: any;
};

export const Input = ({
  type,
  onChange,
  value,
  name,
  label,
  showPassword,
  placeholder,
  onBlur,
  ...rest
}: InputProps) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  console.log(showPassword, type, ">>>>>>");
  function toggleVisibility() {
    setTogglePassword(togglePassword ? false : true);
  }
  return (
    <div className='mt-[1.55rem] text-neutral-darkGray' {...rest}>
      <label htmlFor={name} className='block mb-[0.375rem]'>
        {label}
      </label>
      <div className='input-box p-[0rem] w-[100%] relative '>
        <input
          className=' border-transparent w-[100%] p-2.5 rounded-lg h-[100%] '
          type={showPassword && togglePassword ? "password" : type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />

        <span
          onClick={toggleVisibility}
          className={`{${
            showPassword ? ` inline ` : ` hidden `
          } absolute text-[0.75rem] font-bold text-neutral-darkGray cursor-pointer top-[0.6875rem] z-10 right-[0.5625rem]`}
        > 
          {togglePassword ? "HIDE" : "SHOW"}
        </span>
      </div>
    </div>
  );
};
