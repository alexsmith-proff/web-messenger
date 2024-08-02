import { FC } from "react"

import s from './conference_item_io.module.scss'

interface ConferenceItemIOProps {
    width?: number
    height?: number
    name: string
    photo?: string
    active?: boolean
    microphoneOn?: boolean
    clickMicrophone: () => void
}

const ConferenceItemIO: FC<ConferenceItemIOProps> = ({ width, height, photo, name, active = false, microphoneOn = false, clickMicrophone }) => {
    return (
        <div className={active ? `${s.item} ${s.active}` : s.item} style={{
            width,
            height,
            backgroundImage: 'url("img/noPhoto.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center'
        }}>
            {/* <div className={s.media}>
                <img src={photo ? photo : 'img/noPhoto.png'} alt="media" />
            </div> */}
            <div className={s.info}>
                <h2 className={s.name}>{name}</h2>
                <div className={microphoneOn ? `${s.btn} ${s.active}` : s.btn}>
                    {
                        microphoneOn ? <img src="img/microphoneOn.png" alt="m" /> : <img src="img/microphoneOff.png" alt="m" />
                    }
                </div>
            </div>

        </div>
    )
}

export default ConferenceItemIO