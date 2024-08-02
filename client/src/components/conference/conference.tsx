import { FC } from "react"

import s from './conference.module.scss'
import ConferenceItem from "./conference_item/conference_item"
import { contactsData } from "../../data/data"
import storeModel from "../../store/store"
import { observer } from "mobx-react-lite"

interface ConferenceProps {
}

const Conference: FC<ConferenceProps> = observer(() => {
    return (
        <div className={s.conference}>
            {
                storeModel.activeItemConference !== 0 ? contactsData[storeModel.activeItemConference - 1].users.map((item: any) => <ConferenceItem user={item} key={item.id} />) : null
            }
        </div>
    )
})

export default Conference