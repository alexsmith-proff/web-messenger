import { FC, InputHTMLAttributes} from 'react'
import s from './input.module.scss'

// Стилизованная надстройка над <input>
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    refE?: any    
    error?: boolean // TODO: 
    //value: any | null
    //onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    //disabled?: boolean
    // width?: number
    //tabIndex? : number | undefined// TODO:
    //autoFocus? : boolean
    //type?: 'text' | 'password'
    //placeholder?: string
}

const Input: FC<InputProps> = ({ error=false, disabled=false, className, refE,  ...rest }) => {

    return (
        <input className={`${className} ${s.input} ${error?s.error:''} ${disabled?s.disable:'' }`} 
            ref={refE} {...rest} />
    )
}

export default Input