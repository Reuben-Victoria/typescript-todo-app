import { ReactNode, useState } from "react";
import { Header } from "../components/Header";

type authLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  accountText?: string;
  [x: string]: any;
};

export const AuthLayout = ({
  children,
  title,
  description,
  accountText,
}: authLayoutProps) => {
  const [close, setClose] = useState<boolean>(false);
  return (
    <div className='flex flex-col w-[100%] h-[100vh] justify-between'>
      <Header close={close} setClose={setClose} />
      <div className='px-[2rem] md:mx-[auto] justify-center items-center mt-[4rem] md:mt-[5.5rem] w-[100%] h-[calc(100vh-80px)]'>
        <h1 className='text-[1.75rem] md:text-[1.875rem] font-bold md:font-semibold mb-[0.75rem] text-center'>
          {title}
        </h1>
        <p className='text-[0.975rem] md:text-1 font-bold mt-[0.75rem] mb-[0.75rem] text-center'>
          {description}
        </p>
        <div className='md:w-[27%] md:mx-[auto]'>
          {children}
        </div>
        <span className='inline-block'>{accountText}</span>
      </div>
    </div>
  );
};
