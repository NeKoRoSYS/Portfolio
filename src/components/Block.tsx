import type { ReactNode } from "react";

interface BlockProps {
    children?: ReactNode;
    className?: string;
    borderVisible?: boolean;
}

export default function Block({id, children, className, borderVisible = true}: BlockProps & {id?: string}) {
    return (
        <section id={id} className={`w-full flex flex-col justify-center items-center ${borderVisible ? `border-b border-zinc-800` : ''} ${className}`}>
            <div className={`w-full h-full max-w-5xl py-12 sm:py-16 px-8 xl:px-0`}>
                {children}
            </div>
        </section>
    );
}

export interface SectionProps {
    title?: string;
    text?: string;
    bgColor?: string;
    center?: boolean;
    reverse?: boolean;
    itemsOutside?: ReactNode[];
    itemsInside?: ReactNode[];
}

export function Section(props: SectionProps) {
    const {
        title,
        text,
        bgColor = "bg-zinc-950",
        center = false,
        reverse = false,
        itemsOutside,
        itemsInside
    } = props;
    
    return (
        <Block className={` ${bgColor}`}>
        <div className={`flex flex-wrap gap-8 ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} w-fit sm:w-full`}>
            <div className={`flex flex-col gap-8 ${!itemsOutside ? 'w-full' : 'w-full lg:w-fit'}`}>
                { title ? <h1 className={`text-4xl font-bold ${center ? 'text-center' : ''}`}>{title}</h1> : null }
                { text ? <p className={`${center ? 'text-center' : ''}`}>{text}</p> : null }
                {
                    itemsInside ?
                    <div className={`flex flex-col gap-8 w-full`}>
                    {
                        itemsInside?.map((element) => (
                            <>{element}</>
                        ))
                    }
                    </div> :
                    null
                }
            </div>
            {
                itemsOutside ?
                <div className="flex flex-wrap lg:flex-col gap-8 w-full lg:w-fit sm:mx-auto">
                {
                    itemsOutside?.map((element) => (
                        <>{element}</>
                    ))
                }
                </div> :
                null
            }
        </div>
        </Block>
    );
}