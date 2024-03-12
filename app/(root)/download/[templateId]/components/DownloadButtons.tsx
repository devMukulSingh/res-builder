'use client'
import { Button } from '@/components/ui/button'
import { SiMicrosoftword } from "react-icons/si";
import { BsFiletypePdf } from "react-icons/bs";

const DownloadButtons = () => {
    const handlePdfDownload = () => {

    }
    const handleWordDownload = () => {

    }
    return (
        <main className='flex gap-5'>
            <Button onClick={handlePdfDownload} >
                <BsFiletypePdf className='text-xl mr-2' />
                Download PDF
            </Button>
            <Button onClick={handleWordDownload}>
                <SiMicrosoftword className='text-xl mr-2' />
                Download Word
            </Button>
        </main>
    )
}

export default DownloadButtons