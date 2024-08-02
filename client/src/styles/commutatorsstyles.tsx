import { useEffect, useRef } from 'react'
import React, { FC, ReactNode } from 'react'
import s from './commutators.module.scss'

interface CommutatorsProps {
    children: any
}

const CommutatorsStyles: FC<CommutatorsProps> = ({children}) => {
    const refElt = useRef<HTMLDivElement>(null)

    useEffect(() => {
        localStorage.setItem('--theme', "r0mts");
        document.documentElement.dataset.theme = "rm0ts";
        localStorage.setItem('theme', "rm0ts");
        document.body.style.setProperty("--theme", "rmt0s");
    }, [refElt])


    return ( <div ref={refElt} className='${s.commutators}'>{children}</div>);
}

export default CommutatorsStyles;