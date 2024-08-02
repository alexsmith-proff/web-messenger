import React, { FC, ReactNode } from 'react'
import s from './rmts.module.scss'

interface RmtsStylesProps {
    children: any
}

const RmtsStyles: FC<RmtsStylesProps> = ({children}) => {
    return ( <div className='${s.rmts}'>{children}</div>);
}

export default RmtsStyles;