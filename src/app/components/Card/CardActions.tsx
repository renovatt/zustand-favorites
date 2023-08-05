import { ReactNode } from "react";

type CardActionsProps = {
    children: ReactNode;
}

export const CardActions = ({ children }: CardActionsProps) => {
    return (
        <div className="flex gap-2 self-center">
            {children}
        </div>
    )
}