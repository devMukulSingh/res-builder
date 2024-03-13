import Header from "@/components/commons/Header";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="max-h-[100vh] overflow-hidden">
            <Header />
            <div className="mt-24">
                {children}
            </div>
        </main>
    )
}