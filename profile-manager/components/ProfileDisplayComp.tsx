import Link from "next/link"
import { ProfileCardComp } from "./ProfileCardComp";

export const ProfileDisplayComp = () => {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}')
    return(
        <div className="flex justify-center py-4 ">
            <div className="flex-col w-1/2">
            <ProfileCardComp/>
            Tabs
            </div>
        </div>
    );
}