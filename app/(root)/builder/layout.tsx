import Sidebar from "./[templateId]/components/Sidebar"
import Template1 from "./[templateId]/components/Template1"


export default function TemplateLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <main className="flex gap-5">
            <Sidebar />
            <div className="w-[30rem]">
                {children}
            </div>
            <Template1/>
        </main>
    )
}