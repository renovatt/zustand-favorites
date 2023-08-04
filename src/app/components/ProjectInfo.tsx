'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { ProjectsTypeProps } from '@/@types'
import { RiCloseFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

export default function ProjectInfo({ ...props }: ProjectsTypeProps) {
    const router = useRouter();

    function handleCloseModal(
        event: React.MouseEvent<HTMLElement> |
            React.TouchEvent<HTMLElement>
    ) {
        if (event.target === event.currentTarget) {
            router.push('/')
        }
    }

    const handleLoad = (
        event: React.SyntheticEvent<HTMLImageElement>
    ): void => {
        event.currentTarget.style.opacity = "1";
    }

    const handleLoadSvg = (event: React.SyntheticEvent<HTMLObjectElement>): void => {
        const objectElement = event.currentTarget as HTMLObjectElement;
        objectElement.style.opacity = "1";
    };

    // const backgroundImageUrl = `${props.thumbnail_url}`;

    // const sectionStyle = {
    //     backgroundImage: `url(${backgroundImageUrl})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // };

    return (
        <section
            // style={sectionStyle}
            className='flex items-center justify-center fixed top-0 left-0 z-[50] w-screen h-screen bg-backgroundShadow overflow-y-auto'
            onClick={(e) => handleCloseModal(e)}
        >
            <section
                className='flex items-center justify-between h-auto md:max-h-[800px] max-h-[initial] md:h-[85vh] w-[80%] max-w-6xl rounded-lg py-3 px-2 flex-col md:flex-row bg-zinc-800 relative md:mt-0 mt-[35rem] md:mb-0 mb-10 animate-zoom'
                key={props.id}
            >
                <Link href={'/'}>
                    <RiCloseFill
                        className='absolute -top-2.5 -right-4 w-8 h-8 rounded-full bg-backgroundPrimary transition-all ease-in text-white hover:text-textPrimary hover:bg-white cursor-pointer'
                    />
                </Link>

                <section className='flex items-center justify-center flex-col h-full'>
                    <section
                        className='mt-8 md:mt-0 h-96 w-60 my-0 mx-2 rounded-lg bg-backgroundThird bg-cover bg-center'
                        style={{ backgroundImage: `url(${props.banner_url})` }}
                    >
                        <div className="flex items-center justify-between flex-col h-full rounded-lg py-6 hover:bg-backgroundShadow border border-zinc-800 hover:border-textPrimary transition-all ease-in-out"></div>
                    </section>

                    <h1 className='text-center text-white font-bold text-2xl mt-2'>
                        {props.project_name}
                    </h1>

                    <Button
                        text='Deploy'
                        href={props.deploy_url}
                    />
                </section>

                <section className='flex items-center md:justify-around justify-center flex-col w-full h-auto md:h-full max-w-[900px] p-8 mt-8 md:mt-0 overflow-hidden'>
                    <figure className='w-full h-full md:h-96 max-h-[25rem] transition-all ease-in rounded-lg'>
                        <Image
                            className='object-cover opacity-0 rounded-lg w-full h-full'
                            src={props.thumbnail_url}
                            alt={props.project_name}
                            onLoad={handleLoad}
                            width={1000}
                            height={1000}
                            priority
                            fetchPriority='high'
                            decoding='async'
                            data-nimg="1"
                        />
                    </figure>

                    <p className='flex justify-center items-center text-justify w-full h-full md:h-40 p-2 my-0 mx-2 text-white'>
                        {props.description}
                    </p>

                    <section className='flex md:justify-start justify-center items-center w-full'>
                        {props.techs.links.map(tech => (
                            <nav className='flex justify-center items-center' key={tech.id}>
                                <Link
                                    className='flex justify-center items-center'
                                    href={tech.link}
                                    target='_blank'
                                >
                                    <figure className='w-6 h-6 m-1'>
                                        <object
                                            className="opacity-0 w-full h-full object-cover"
                                            type="image/svg+xml"
                                            data={tech.svg_link}
                                            onLoad={handleLoadSvg}>
                                        </object>
                                    </figure>
                                </Link>
                            </nav>
                        ))}
                    </section>
                </section>
            </section>
        </section>
    )
}