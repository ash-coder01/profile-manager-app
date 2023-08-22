import Link from "next/link"
import { useState } from "react";
import { PortfolioComp } from "./PortofolioComp";
import { ResumeComp } from "./ResumeComp";

export const TabsComp = () => {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}')
    const [openTab, setOpenTab] = useState(0);
    const clickPortfolio = () => {
        setOpenTab(0);
        return;
    }
    const clickResume = () => {
        setOpenTab(1);
        return;
    }
    return(
        <div className=" mb-10 ">
            <div>
            {openTab === 0 && <div>
            <ul className="rounded-lg border-gray-200 py-2 px-2 w-full mb-10 border flex flex-wrap text-gray-900 font-medium text-small text-center inline-flex items-center w-25 px-4 rounded-lg" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button onClick={()=>clickPortfolio()} className="inline-block px-4 py-3 text-blue-800 bg-blue-100 rounded-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Portfolio</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button onClick={()=>clickResume()} className="inline-block px-4 py-3 rounded-lg  bg-gray-200 hover:text-gray-100 hover:bg-gray-800" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Resume</button>
                </li>
            </ul>
            <div><PortfolioComp/></div></div>}
            {openTab === 1 && <div>
            <ul className="rounded-lg border-gray-200 py-2 px-2 w-full mb-10 border flex flex-wrap text-gray-900 font-medium text-small text-center inline-flex items-center w-25 px-4 rounded-lg" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button onClick={()=>clickPortfolio()} className="inline-block px-4 py-3 rounded-lg  bg-gray-200 hover:text-gray-100 hover:bg-gray-800" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Portfolio</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button onClick={()=>clickResume()} className="inline-block px-4 py-3 text-blue-800 bg-blue-100 rounded-lg" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Resume</button>
                </li>
            </ul>
            <div><ResumeComp/></div></div>}
        </div>
        </div>
    );
}