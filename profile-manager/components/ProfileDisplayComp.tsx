import Link from "next/link"
import { ProfileCardComp } from "./ProfileCardComp";
import { TabsComp } from "./TabsComp";

export const ProfileDisplayComp = () => {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}')
    return(
        <div className="flex justify-center py-4 ">
            <div className="flex-col w-1/2">
            <ProfileCardComp/>
            <TabsComp/>
            </div>
        </div>
    );
}