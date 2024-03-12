'use client'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { templatesUrl } from '@/lib/constants';
const Template = dynamic( () => import('./components/Template'))


const TemplatesPage = () => {

    const router = useRouter();
    const [templateId, setTemplateId] = useState("");

    const handleTemplateSelect = () => {
        window.location.href= `/builder/${templateId}/personal`;
        // router.push(`/builder/${templateId}/personal`);
    }
    return (
        <main className=' flex flex-col [h-calc(100vh-6rem)] px-10 py-3'>
            <BiArrowBack
                onClick={() => router.push('/')}
                className='text-xl size-10 cursor-pointer' />
            <section className='flex items-center flex-col gap-10'>
                <h1
                    className='text-xl slef-start sm:text-3xl font-bold whitespace-nowrap'>
                    Select your Template
                </h1>
                <div className='sm:flex-row flex flex-col gap-10'>
                    {
                        templatesUrl.map(image => (
                            <Template
                                templateId={templateId}
                                key={image.id}
                                image={image}
                                setTemplateId={setTemplateId}
                            />
                        ))
                    }
                </div>
                    <Button
                        disabled={templateId==='' ? true : false}
                        onClick={handleTemplateSelect}
                        className='w-60 rounded-sm'>
                        Select
                    </Button>
            </section>
        </main>
    )
}

export default TemplatesPage