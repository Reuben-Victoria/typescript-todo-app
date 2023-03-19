import dummy from "../assets/dummy.svg";
import {BsCalendar2Heart} from "react-icons/bs"
export const Sidebar = () => {
  return (
    <>
      <div className=" rounded-l-lg h-[100vh]">
        <div>
          <div>
            <img src={dummy} alt='ju' />
          </div>
          <div>
            <h3>Do it</h3>
            <h2>User Name</h2>
          </div>
        </div>
        <div></div>
        <div>
            <div>
                <BsCalendar2Heart color="#7F56D9" size={"1.5rem"}/>
            </div>
            <ul>
                
            </ul>
        </div>
      </div>
    </>
  );
};
