import { useState, useEffect, useRef } from "react";
import { tempuserProfile } from "@/data/profile";

export const SocialsFormComp = () => {
    const [prof, setProf] = useState(tempuserProfile);

    useEffect(()=>{
        setProf(JSON.parse(localStorage.getItem('userProfile') || '{}'));
    },[])

    const handleClickSubmit = () => {
        const firstNameFinal = (document.getElementById('firstNameID') as HTMLInputElement).value;
        const lastNameFinal = (document.getElementById('lastNameID') as HTMLInputElement).value;
        const aboutFinal = (document.getElementById('aboutID') as HTMLInputElement).value;
        const professionFinal = (document.getElementById('professionID') as HTMLInputElement).value;
        const dobFinal = (document.getElementById('dobID') as HTMLInputElement).value;
        const genderFinal = (document.getElementById('genderID') as HTMLInputElement).value;


        prof.firstName = firstNameFinal;
        prof.lastName = lastNameFinal;
        prof.about = aboutFinal;
        prof.profession = professionFinal;
        prof.dob = dobFinal;
        prof.gender = genderFinal;

        localStorage.setItem("userProfile", JSON.stringify(prof));
    }

    return (
        <div className="px-4 w-9/12">
            <form className="flex flex-col space-y-4">

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Github</label>
                    <input defaultValue={prof.links.github} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="githubID" />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Linkedin</label>
                    <input defaultValue={prof.links.linkedin} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="linkedinID"/>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Facebook</label>
                    <input defaultValue={prof.links.facebook} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="facebookID" />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Instagram</label>
                    <input defaultValue={prof.links.instagram} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="instagramID" />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Youtube</label>
                    <input defaultValue={prof.links.youtube} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="youtubeID" />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Dribbble</label>
                    <input defaultValue={prof.links.dribbble} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="dribbbleID" />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Behance</label>
                    <input defaultValue={prof.links.behance} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="behanceID" />
                </div>

                <div className="flex pt-8 space-x-4 self-end">
                    <button className="px-4 h-10 flex items-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 cursor-pointer" type="submit">Cancel</button>
                    <button className="px-4 h-10 flex items-center bg-blue-700 text-gray-50 rounded-lg hover:bg-blue-900 cursor-pointer" onClick={handleClickSubmit} type="submit">Save changes</button>
                </div>
            </form>
        </div>
    );
}