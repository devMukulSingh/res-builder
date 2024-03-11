import { useAppDispatch } from "@/redux/hooks/hooks"
import { setSelectedBio } from "@/redux/slice/userSlice";

interface SuggestedBioProps {
    bioFromDb: string[]
}

const SuggestedBio: React.FC<SuggestedBioProps> = ({
    bioFromDb
}) => {

    const dispatch = useAppDispatch();

    return (
        <main className='flex flex-col gap-3 bg-white p-5'>
            <h1 className='text-xl font-semibold'>Suggested Bio</h1>
            <ol className='list-decimal pl-5 text-sm text-neutral-500 space-y-2'>
                {
                    bioFromDb.map((bio: string,index:number) => (
                        <li
                            key={index}
                            onClick={ () => dispatch(setSelectedBio(bio)) } 
                            className="cursor-pointer"
                        >
                            {bio}
                        </li>
                    ))
                }
            </ol>
        </main>
    )
}

export default SuggestedBio