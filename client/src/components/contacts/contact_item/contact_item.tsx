import { FC } from "react"

import s from './contact_item.module.scss'

interface ContactItemProps {
    id: number
    contactName: string
    lastMessage?: string
    time?: string
    active?: boolean
    click: (id: number) => void
}

const ContactItem: FC<ContactItemProps> = ({ id, contactName, lastMessage, time, active = false, click }) => {
    return (
        <div className={active ? `${s.item} ${s.active}` : s.item} onClick={() => click(id)}>
            <div className={s.ico}>
                {
                    active ? <img src="img/contactIcoActive.png" alt="contactIco" /> : <img src="img/contactIco.png" alt="contactIco" />
                }
            </div>
            <div className={s.block}>
                <div className={s.text}>
                    <div
                        className={s.contactName}
                        style={{ color: active ? '#FFF' : '#000' }}
                    >
                        {contactName}
                    </div>
                    <div
                        className={s.lastMessage}
                        style={{ color: active ? '#d1d1d1' : '#c7c7c7' }}
                    >
                        {lastMessage}
                    </div>
                </div>
                <div
                    className={s.time}
                    style={{ color: active ? '#FFF' : '#000' }}
                >
                    {time}
                </div>
            </div>
        </div>
    )
}

export default ContactItem