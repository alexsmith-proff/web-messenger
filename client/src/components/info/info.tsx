import { FC } from "react"

import s from './info.module.scss'

interface InfoProps {
    contactName: string
    timePassed: string
    users: any[]
}

const Info: FC<InfoProps> = ({ contactName, timePassed, users }) => {
    return (
        <div className={s.info}>
            <div className={s.ico}>
                <img src="img/contactIcoActive.png" alt="contactIco" />
            </div>
            <div className={s.block}>
                <div className={s.top}>
                    <div className={s.name}>{contactName}</div>
                    <div className={s.time}>{`Прошло ${timePassed}`}</div>
                </div>
                <div className={s.bottom}>
                    <span className={s.count}>{`${users.length} человек(а) `}</span>
                    <span className={s.users}>{`(${users.map(item => item.name).join(', ')})`}</span>
                </div>
            </div>
        </div>
    )
}

export default Info