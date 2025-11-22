"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { toast } from "sonner";

interface InteractiveButtonProps extends ButtonProps {
    actionName: string;
    toastMessage?: string;
}

export function InteractiveButton({
    actionName,
    toastMessage,
    onClick,
    children,
    ...props
}: InteractiveButtonProps) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        toast.success(toastMessage || `${actionName} action triggered!`);
        if (onClick) onClick(e);
    };

    return (
        <Button onClick={handleClick} {...props}>
            {children}
        </Button>
    );
}
