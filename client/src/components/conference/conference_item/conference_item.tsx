import { FC, useState } from "react"

import s from './conference_item.module.scss'
import ConferenceItemIO from "../../conference_item_io/conference_item_io";

interface ConferenceItemProps {
    user: any
}

const ConferenceItem: FC<ConferenceItemProps> = ({ user }) => {
    // console.log('aaa-user', user);

    const handleClickMicrophone = () => {
        console.log('aaa-clickMicrophone')
    }
    
    return (
        <div className={s.item}>
            <ConferenceItemIO name={user.name} active={user.active} microphoneOn={user.microphoneOn} clickMicrophone={handleClickMicrophone} />            
        </div>
    )
}

export default ConferenceItem