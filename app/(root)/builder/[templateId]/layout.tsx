import Sidebar from "./components/Sidebar"


export default function TemplateLayout({children}:{
    children:React.ReactNode
}){
    return(
        <main className="flex gap-5">
            <Sidebar/>
            {children}
        </main>
    )
}