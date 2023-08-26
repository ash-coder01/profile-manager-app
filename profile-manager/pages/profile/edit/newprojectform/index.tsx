import { EditTabsComp } from "@/components/EditTabsComp";
import { NavBar } from "@/components/NavBar";
import { useState, useEffect, useRef } from "react";
import { tempuserProfile } from "@/data/profile";
import { technology } from "@/data/profile";
import Link from "next/link";

export default function NewProjectFormScreen() {
    const [prof, setProf] = useState(tempuserProfile);
    const [title, setTitle] = useState('');
    const [techs, setTechs] = useState('');
    

    useEffect(()=>{
        setProf(JSON.parse(localStorage.getItem('userProfile') || '{}'));
    },[])

    const handleClickFormSubmit = () => {
        setTitle((document.getElementById("newProjTitleID") as HTMLInputElement).value)
        setTechs((document.getElementById("newProjTechUsedID") as HTMLInputElement).value)
        let techarray = [];
        for (let i = 0; i < techs.length; i++) {
            if(techs[i]!=' '){
                techarray.push(Number(techs[i]));
            }
          }

        const newProject = {
            id:prof.projects.data.length, 
            title:title, 
            timeStamp: Math.floor(Math.random() * 10), 
            techUsed: techarray, 
            bhimage: "", 
            visibility: true
        }

        prof.projects.data.push(newProject);

        localStorage.setItem("userProfile", JSON.stringify(prof));
    }

    return (
        <div>
            <NavBar/> 
            <div className="flex w-full">
                <EditTabsComp tabs = {2} />
                <div className="py-4 px-8 w-6/12">
                    <form className="flex flex-col space-y-8 w-full">

                        <div className='flex flex-col space-y-8'>
                            <div className="space-y-8">
                                <button className="mb-4 text-xl text-blue-500 font-bold">Create new project</button>
                            </div>

                            <div className='flex flex-col space-y-2'>
                                <label className="font-medium">Title</label>
                                <input className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="newProjTitleID" />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label className="font-medium">Tech used</label>
                                <input className="border border-gray-200 h-10 px-4 py-2 rounded-md" type="text" id="newProjTechUsedID" />
                                <p>Options are: </p>
                                {technology.map((sk) => {
                                    return(
                                        `${sk.id} - ${sk.name} ${(sk.id==technology.length-1)?".":"; "} ` 
                                    )
                                })}
                                <p>Enter the respective numbers space separated.</p>
                            </div>
                        </div>

                        <div className="flex pt-8 space-x-4 self-end">
                            <button className="px-4 h-10 flex items-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 cursor-pointer" type="submit">Cancel</button>
                            <Link href="/profile/edit/portfolioform"><button className="px-4 h-10 flex items-center bg-blue-700 text-gray-50 rounded-lg hover:bg-blue-900 cursor-pointer" onClick={handleClickFormSubmit} type="submit">Save</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );  
}