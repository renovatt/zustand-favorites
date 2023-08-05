type CardTitleProps = {
    text: string;
}

export const CardTitle = ({ text }: CardTitleProps) => {
    return (
        <h1 className='text-center text-textPrimary text-xs font-bold mt-2 select-none'>{text}</h1>
    )
}