import Header from "@/components/commons/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <Header />
      <div className="mt-24">{children}</div>
    </main>
  );
}
