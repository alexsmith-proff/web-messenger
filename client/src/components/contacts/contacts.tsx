import { FC } from "react"

import s from './contacts.module.scss'
import ContactItem from "./contact_item/contact_item"
import { contactsData } from "../../data/data"

interface ContactsProps {
    activeItemId: number
    click: (id: number) => void
}

const Contacts: FC<ContactsProps> = ({ activeItemId, click }) => {
    return (
        <div className={s.contacts}>
            {
                contactsData.map((item) => (
                    <ContactItem
                        id={item.id}
                        contactName={item.name}
                        lastMessage={item.lastMessage}
                        time={item.time}
                        active={item.id === activeItemId ? true : false}
                        click={click}
                        key={item.id}
                    />
                ))
            }
        </div>
    )
}

export default Contacts