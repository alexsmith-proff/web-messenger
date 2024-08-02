import { FC } from "react";
import MainLayout from "../../layouts/main_layout/main_layout";
import Conference from "../../components/conference/conference";

const Main: FC = () => {
    return (
       <MainLayout>
            <Conference />
        </MainLayout>
    )
}

export default Main