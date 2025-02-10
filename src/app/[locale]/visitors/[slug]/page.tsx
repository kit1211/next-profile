"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl';


function Visitors() {
    const { slug } = useParams();
    const t = useTranslations();



    return (
        <>
            <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md ">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap block max-w-xs">
                    {t("page.dashboard.title")} /
                    <span className="text-gray-500 dark:text-gray-400 text-sm ">
                        {slug ? decodeURIComponent(slug as string) : "Loading..."}
                    </span>
                </h1>

            </div>


            <div className='mt-5 700 p-5 rounded-lg bg-white shadow-lg dark:bg-gray-800'>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white break-words animate-fade-in">
                    {slug ? decodeURIComponent(slug as string) : "Loading..."}
                </h1>

                <hr className="my-4 border-gray-300 dark:border-gray-600" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                    <div className="p-6 text-white text-left rounded-lg">
                        <h1 className="text-2xl  text-gray-900 dark:text-white mb-3">ตัวอย่างการใช้งาน</h1>
                        <iframe className='w-full h-96' src="https://www.youtube.com/embed/BvJSig2WhnY?si=WXb45XYJhlxvxxjn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

                    </div>
                    <div className="p-6 text-white rounded-lg ">
                        <h1 className="text-2xl  text-gray-900 dark:text-white mb-3">รายละเอียด</h1>
                        <p className="text-gray-900 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            
                        </p>
                        <hr className='my-4 border-gray-300 dark:border-gray-600' />
                        <div className="flex">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md">สั่งซื้อ</button>
                        </div>
                    </div>
             
                </div>
            </div>
         
        </>

    )
}

export default Visitors
