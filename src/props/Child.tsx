import React from "react";

interface ChildProps {
    children?: React.ReactNode;
    color: string
    onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>
}

export const ChildAsFC: React.FC<ChildProps> = ({ color , onClick}) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>
}

ChildAsFC.displayName