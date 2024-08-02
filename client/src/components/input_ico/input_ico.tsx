import { FC, InputHTMLAttributes } from 'react'
import Input from '../Input/input'
import s from './input_ico.module.scss'

interface InputIcoProps extends InputHTMLAttributes<HTMLInputElement> {
    value: any | null
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    type?: 'text' | 'password'
    placeholder?: string
    //inputWidth? : number | string  //????
    error?: boolean // TODO: 
    tabIndex?: number | undefined// TODO:
    autoFocus?: boolean
    ico?: React.ReactElement
    icoPosition?: 'left' | 'right'
    leftOffsetIco?: number
    topOffsetIco?: number
    clickIco?: () => void
    className?: string
    style?: React.CSSProperties
    refE?: any
    onBlur?: (a: any) => void
}

const InputIco: FC<InputIcoProps> = ({ value, disabled = false, type, placeholder, error = false, onChange, autoFocus, ico, icoPosition = 'right', leftOffsetIco = 0, topOffsetIco = 0, clickIco, className, tabIndex, refE, onBlur }) => {

    return (
        <div className={s.container}>
            <Input className={className} tabIndex={tabIndex} type={type} placeholder={placeholder}
                refE={refE} onBlur={onBlur} value={value} disabled={disabled} onChange={onChange} autoFocus={autoFocus} />
            <div
                className={s.ico}
                style={{
                    left: icoPosition === 'left' ? `${10 + leftOffsetIco}px` : 'auto',
                    right: icoPosition === 'right' ? `${10 + leftOffsetIco}px` : 'auto',
                    top: `calc(50% + ${2 + topOffsetIco}px)`
                 }}
                onClick={clickIco}
                // tabIndex={Number(tabIndex) + 1}
            >
                {ico}
            </div>
        </div>
    )
}

export default InputIco