import { Sidebar } from "../components/Sidebar";
import { TodoModal } from "../components/TodoModal";

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className='flex'>
        <aside className='top-0 bottom-0 left-0 '>
          <Sidebar />
        </aside>
        <main className=' flex items-center justify-center'>
            <TodoModal/>
        </main>
      </div>
    </>
  );
};
