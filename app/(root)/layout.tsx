import Header from "./(landing)/components/Header";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}