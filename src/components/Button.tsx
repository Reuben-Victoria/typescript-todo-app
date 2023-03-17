// import { HTMLAttributes } from "react";

// type React.ButtonHTMLAttributes<T> extends HTMLAttributes<T> ={
//     autoFocus?: boolean | undefined;
//     disabled?: boolean | undefined;
//     form?: string | undefined;
//     formAction?: string | undefined;
//     formEncType?: string | undefined;
//     formMethod?: string | undefined;
//     formNoValidate?: boolean | undefined;
//     formTarget?: string | undefined;
//     name?: string | undefined;
//     type?: 'submit' | 'reset' | 'button' | undefined;
//     value?: string | ReadonlyArray<string> | number | undefined;
// }

import { ReactComponent as Loader } from "../assets/loading.svg";

type ButtonProps = {
  onClick?: () => void;
  type?: string;
  buttonTheme?: string;
  text: string | Element;
  loading?: boolean | undefined;
  disabledButton: string | boolean;
  [x: string]: any;
};

export const Button = ({
  onClick,
  text,
  type,
  rest,
  disabledButton,
  loading,
  buttonTheme,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${buttonTheme} ${disabledButton}`}
        type={type}
        {...rest}
      >
        {loading ? <Loader className='spinner' /> : text}
      </button>
    </>
  );
};
