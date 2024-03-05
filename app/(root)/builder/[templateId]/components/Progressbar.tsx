'use client'
import { Progress } from '@/components/ui/progress';
import { useAppSelector } from '@/redux/hooks/hooks';
import { useEffect, useState } from 'react';

const Progressbar = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect( () => {
        setIsMounted(true);
    },[]);

    const progress = useAppSelector(state => state.rootSlice.progress);

    if(!isMounted) return null;
    
    return (
        <main className="px-10 py-5  flex flex-col gap-2">
            <h1>Progress</h1>
            <div className="flex gap-5 items-center">
                <Progress value={progress} className="w-64 " />
                <h1>{progress}%</h1>
            </div>
        </main>
    )
}

export default Progressbar