import { Sidebar } from "../components/Sidebar"

type DashboardLayoutProps = {
    children: React.ReactNode
}

export const DashboardLayout = ({children}:DashboardLayoutProps) => {
    return(
        <>
         <div className="flex">
            <aside className="fixed top-0 bottom-0 left-0 rounded-lg">
                <Sidebar/>
            </aside>
            <main className="bg-blue">
                {children}
            </main>
         </div>
        </>
    )
}