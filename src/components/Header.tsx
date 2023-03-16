// import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";

type HeaderProps = {
  close?: boolean;
  setClose: (param:boolean)=>void
};
export const Header = ({ close, setClose }: HeaderProps) => {
  const navigate = useNavigate()
  return (
    <header className='py-[1.00rem] px-[0.5rem] md:px-[1.5rem] md:py-[1.75rem] w-[100%] shadow-lg'>
      <nav className='flex justify-between items-center '>
        <div>
          <h2 className='font-bold text-[2rem] md:text-[2.5rem] md:font-extrabold text-neutral-primaryAccent'>
            doings
          </h2>
        </div>
        <div className='md:text-[1.25rem]'>
          <div className='hidden md:block'>
            <button onClick={()=>navigate("/")}>Login</button>
            <button className='ml-[0.75rem] md:ml-[2rem]' onClick={()=>navigate("/signup")}>SignUp</button>
          </div>

          <div className='md:hidden' onClick={()=>(setClose(!close))}>
            {close ? <RxHamburgerMenu /> : <VscClose />}
          </div>
        </div>
      </nav>
    </header>
  );
};
