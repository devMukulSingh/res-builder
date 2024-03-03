import Landing from "./components/Landing"
import SignUp from "./components/PersonalForm"


const Page = () => {
  return (
    <main className="px-5 md:px-10 lg:px-20 flex flex-col justify-center w-full items-center gap-10 py-5 md:flex-row ">
      <Landing />
      <SignUp />
    </main>
  )
}

export default Page