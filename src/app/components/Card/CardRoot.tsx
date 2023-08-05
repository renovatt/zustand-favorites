import { ReactNode } from 'react'
import { ProjectsTypeProps } from '@/@types';

type CardARootProps = {
    children: ReactNode;
} & ProjectsTypeProps

export const CardRoot = ({ children, ...props }: CardARootProps) => {
    const handleLoad = (
        event: React.SyntheticEvent<HTMLImageElement>
    ): void => {
        event.currentTarget.style.opacity = '1';
    }

    return (
        <section
            className='relative h-64 w-40 rounded-lg bg-backgroundThird bg-cover bg-center m-4 cursor-pointer animate-fade'
            style={{ backgroundImage: `url(${props.banner_url})` }}
            onLoad={handleLoad}
        >
            {children}
        </section>
    )
}