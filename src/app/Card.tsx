const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="border border-teal-50 rounded py-1 px-4 flex flex-col items-center justify-center">
            {children}
        </section>
    )
}

export default Card;