import { useState } from "react";

export const FormComp = () => {
    const [tabs, setTabs] = useState(0);

    const handleClick = (tab: Number) => {
        setTabs(Number(tab));
        console.log('Tabs value is updated to : '+ tab);
    }

    return (
        <div>
            <div className="flex w-full">
                <div className="w-1/6 bg-gray-50 border-gray-150 border rounded-xl mx-8 my-8">
                    <ul className="font-medium space-y-2 py-4">
                        <li>
                            <button className = {`flex p-2 w-full ${(tabs === 0) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`}  onClick={() => handleClick(0)}> 
                            <span className="ml-3">Profile</span>
                            </button>
                        </li>
                        <li>
                            <button className = {`flex p-2 w-full ${(tabs === 1) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`} onClick={() => handleClick(1)}>
                            <span className="ml-3">Socials</span>
                            </button>
                        </li>
                        <li>
                            <button className = {`flex p-2 w-full ${(tabs === 2) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`} onClick={() => handleClick(2)}>
                            <span className="ml-3">Portfolio</span>
                            </button>
                        </li>
                        <li>
                            <button className = {`flex p-2 w-full ${(tabs === 3) ? "border-l-8 border-gray-900 text-gray-900" : "text-gray-500"}`} onClick={() => handleClick(3)}>
                            <span className="ml-3">Resume</span>
                            </button>
                        </li>
                        
                    </ul>
                </div>
                <div className="py-4 px-8">
                    { (tabs === 0) && <div>Profile Tab</div>}
                    { (tabs === 1) && <div>Socials Tab</div>}
                    { (tabs === 2) && <div>Portfolio Tab</div>}
                    { (tabs === 3) && <div>Resume Tab</div>}
                </div>

                
            </div>
        </div>
    );  
}