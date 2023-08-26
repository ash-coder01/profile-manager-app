import { useState } from "react";
import { ProfileFormComp } from "./ProfileFormComp";
import { SocialsFormComp } from "./SocialsFormComp";

export const FormComp = () => {
    const [tabs, setTabs] = useState(0);

    const handleClick = (tab: Number) => {
        setTabs(Number(tab));
        console.log('Tabs value is updated to : '+ tab);
    }

    return (
        <div>
            <div className="flex w-full">
                <div className="w-1/6 bg-gray-50 border-gray-150 border rounded-xl mx-8 my-8 h-full">
                    <ul className="font-medium space-y-2 py-4 text-lg">
                        <li>
                            <button className = {`flex items-center py-2 px-6 w-full ${(tabs === 0) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`}  onClick={() => handleClick(0)}> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="ml-3">Profile</span>
                            </button>
                        </li>
                        <li>
                            <button className = {`flex items-center py-2 px-6 w-full ${(tabs === 1) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`} onClick={() => handleClick(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>

                            <span className="ml-3">Socials</span>
                            </button>
                        </li>
                        <li>
                            <button className = {`flex items-center py-2 px-6 w-full ${(tabs === 2) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`} onClick={() => handleClick(2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>

                            <span className="ml-3">Portfolio</span>
                            </button>
                        </li>
                        <li>
                            <button className = {`flex items-center py-2 px-6 w-full ${(tabs === 3) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`} onClick={() => handleClick(3)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>

                            <span className="ml-3">Resume</span>
                            </button>
                        </li>
                        
                    </ul>
                </div>
                <div className="py-4 px-8 w-5/6">
                    { (tabs === 0) && <ProfileFormComp/>}
                    { (tabs === 1) && <SocialsFormComp/>}
                    { (tabs === 2) && <div>Portfolio Tab</div>}
                    { (tabs === 3) && <div>Resume Tab</div>}
                </div>

                
            </div>
        </div>
    );  
}