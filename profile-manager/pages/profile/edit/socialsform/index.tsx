import { EditTabsComp } from "@/components/EditTabsComp";
import { NavBar } from "@/components/NavBar";
import { useState, useEffect, useRef } from "react";
import { tempuserProfile } from "@/data/profile";

export default function profileScreen() {
    const [prof, setProf] = useState(tempuserProfile);

    useEffect(()=>{
        setProf(JSON.parse(localStorage.getItem('userProfile') || '{}'));
    },[])

    const handleClickSubmit = () => {
        const githubFinal = (document.getElementById('githubID') as HTMLInputElement).value;
        const facebookFinal = (document.getElementById('facebookID') as HTMLInputElement).value;
        const linkedinFinal = (document.getElementById('linkedinID') as HTMLInputElement).value;
        const instagramFinal = (document.getElementById('instagramID') as HTMLInputElement).value;
        const youtubeFinal = (document.getElementById('youtubeID') as HTMLInputElement).value;
        const dribbbleFinal = (document.getElementById('dribbbleID') as HTMLInputElement).value;
        const behanceFinal = (document.getElementById('behanceID') as HTMLInputElement).value;

        prof.links.github = githubFinal;
        prof.links.facebook = facebookFinal;
        prof.links.linkedin = linkedinFinal;
        prof.links.instagram = instagramFinal;
        prof.links.youtube = youtubeFinal;
        prof.links.dribbble = dribbbleFinal;
        prof.links.behance = behanceFinal;

        localStorage.setItem("userProfile", JSON.stringify(prof));
    }

    return (
        <div>
            <NavBar/> 
            <div className="flex w-full">
                <EditTabsComp tabs = {1} />
                <div className="py-4 px-8 w-6/12">
                    <form className="flex flex-col space-y-4 w-full">

                        <div className='flex flex-col space-y-2'>
                            <label className="font-medium">Github</label>
                            <input defaultValue={prof.links.github} className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="githubID" />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className="font-medium">Facebook</label>
                            <input defaultValue={prof.links.facebook} className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="facebookID" />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className="font-medium">Linkedin</label>
                            <input defaultValue={prof.links.linkedin} className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="linkedinID" />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className="font-medium">Instagram</label>
                            <input defaultValue={prof.links.instagram} className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="instagramID" />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className="font-medium">Youtube</label>
                            <input defaultValue={prof.links.youtube} className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="youtubeID" />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className="font-medium">Dribbble</label>
                            <input defaultValue={prof.links.dribbble} className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="dribbbleID" />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label className="font-medium">Behance</label>
                            <input defaultValue={prof.links.behance} className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="behanceID" />
                        </div>

                        <div className="flex pt-8 space-x-4 self-end">
                            <button className="px-4 h-10 flex items-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 cursor-pointer" type="submit">Cancel</button>
                            <button className="px-4 h-10 flex items-center bg-blue-700 text-gray-50 rounded-lg hover:bg-blue-900 cursor-pointer" onClick={handleClickSubmit} type="submit">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );  
}