import { ReactNode, useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

type authLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  accountText?: string;
  [x:string]:any
};

export const AuthLayout = ({
  children,
  title,
  description,
  accountText,
  ...rest
}: authLayoutProps) => {
  const [close, setClose] = useState<boolean>(false);
  return (
    <div className='flex flex-col w-[100%] h-[100vh] flex-grow-[1] justify-between'>
      <Header close={close} setClose={setClose} />
      <div className='px-[2rem] md:px-[30.125rem] mt-[4rem] md:mt-[5.5rem] justify-center items-center h-[calc(100vh-80px)]'>
        <h1 className='text-[1.75rem] md:text-[1.875rem] font-bold md:font-semibold mb-[0.75rem] text-center'>
          {title}
        </h1>
        <p className='text-[0.975rem] md:text-1 font-bold mt-[0.75rem] mb-[0.75rem] text-center'>
          {description}
        </p>
        <div className='w-[100%]'>{children}</div>
        <Button text={rest.buttonText} type="submit" buttonTheme={"authbutton"}/>
        <span className="inline-block">{accountText}</span>
      </div>
    </div>
  );
};
