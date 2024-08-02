import React, { FC } from "react"
import s from './main_layout.module.scss'
import Find from "../../components/find/find"
import Contacts from "../../components/contacts/contacts"
import Info from "../../components/info/info"
import { contactsData } from "../../data/data"
import { observer } from "mobx-react-lite"
import storeModel from "../../store/store"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = observer(({ children }) => {
    // const [activeItemId, setActiveItemId] = useState<number>(0)

    const handleClick = (id: number) => {
        storeModel.setActiveItemConference(id)
        // setActiveItemId(id)
    }
    return (
        <div className={s.main}>
            <div className={s.left}>
                <Find />
                <div className={s.contacts}>
                    <Contacts activeItemId={storeModel.activeItemConference} click={handleClick} />
                </div>
            </div>
            <div className={s.right}>
                <div className={s.info}>
                    {
                        (storeModel.activeItemConference > 0) ? (
                            <Info
                                contactName={contactsData[storeModel.activeItemConference - 1].name}
                                timePassed={contactsData[storeModel.activeItemConference - 1].timePassed}
                                users={contactsData[storeModel.activeItemConference - 1].users}
                            />
                        ) : null
                    }

                </div>
                <div>{children}</div>
            </div>
        </div>
    )
})

export default MainLayout