import { FC } from "react"
import { VscSettings } from "react-icons/vsc";

import s from './find.module.scss'
import InputFind from "../input_find/input_find";

interface FindProps {
}

const Find: FC<FindProps> = () => {
    return (
        <div className={s.find}>
            <div><VscSettings size={30} className={s.findIco} /></div>
            <div className={s.findInputWrap}>
                <InputFind className={s.findInput} placeholder="Найти" btnFindSize={17} leftOffsetIco={7} />
            </div>
        </div>
    )
}

export default Find