"use client";

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({
    children,
    className
}) => {
  return (
    <div className={"max-w-[1080px] mx-auto " + (className ?? "")}>
        {children}
    </div>
  )
}

export default Container