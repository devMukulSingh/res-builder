import Header from "@/components/commons/Header";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}