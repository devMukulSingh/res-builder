'use client'
import { HTMLRenderer } from '@/lib/HTMLRenderer';
import { useAppSelector } from '@/redux/hooks/hooks';


const Experience = () => {
    const experience = useAppSelector(state => state.persistedReducer.experience);

    return (
        <section className='space-y-1'>
            <div className='flex items-center gap-5'>
                <hr className='h-2 bg-blue-400 w-14' />
                <h1 className=' font-bold'>
                    WORK EXPERIENCE
                </h1>
            </div>
            {
                experience?.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <h1 className='font-bold'>
                            {item.companyName}
                        </h1>
                        <div className='flex justify-between'>
                            <h1>{item?.role}</h1>
                            <h1>{`${item?.startDate}-${item?.endDate}`}</h1>
                        </div>
                        <HTMLRenderer htmlString={item.description} className="text-amber-400" />
                    </div>
                ))
            }
        </section>
    )
}

export default Experience