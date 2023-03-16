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

type ButtonProps = {
  onClick?: () => void;
  type?: string;
  buttonTheme?: string;
  text: string | Element;
  [x: string]: any;
};

export const Button = ({
  onClick,
  text,
  type,
  rest,
  buttonTheme,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${buttonTheme}`}
        type={type}
        {...rest}
      >
        {text}
      </button>
    </>
  );
};
