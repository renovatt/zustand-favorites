import { ReactNode } from 'react';
import { ProjectsTypeProps } from '@/@types'

type ProjectRootProps = {
    children: ReactNode;
} & ProjectsTypeProps;

export const ProjectContent = ({ children, ...props }: ProjectRootProps) => {
    return (
        <section
            className='flex items-center justify-between h-auto md:max-h-[800px] max-h-[initial] md:h-[85vh] w-[80%] max-w-6xl rounded-lg py-3 px-2 flex-col md:flex-row bg-zinc-800 relative md:mt-0 mt-[35rem] md:mb-0 mb-10 animate-zoom z-50'
            key={props.id}
        >
            {children}
        </section>
    )
}