import Header from "./(home)/components/Header";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="mt-24 ">
                {children}
            </div>
        </>
    )
}