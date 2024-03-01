import Landing from "./components/Landing"
import SignUp from "./components/SignUp"


const Page = () => {
  return (
    <main className="px-20 flex flex-col gap-10 py-5 md:flex-row ">
      <Landing />
      <SignUp />
    </main>
  )
}

export default Page