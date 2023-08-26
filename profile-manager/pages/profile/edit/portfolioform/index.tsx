import { EditTabsComp } from "@/components/EditTabsComp";
import { NavBar } from "@/components/NavBar";
import { useState, useEffect, useRef } from "react";
import { tempuserProfile } from "@/data/profile";
import { technology } from "@/data/profile";
import Link from "next/link";

export default function portfolioEditScreen() {
    const [prof, setProf] = useState(tempuserProfile);
    const [createModal, setCreateModal] = useState([false, false, false]);

    useEffect(()=>{
        setProf(JSON.parse(localStorage.getItem('userProfile') || '{}'));
    },[])

    const handleClickSubmit = () => {
        prof.projects.data.forEach((proj)=>{
            if( (document.getElementById(`ProjCheckbox${proj.id}`) as HTMLInputElement).checked == true )
                proj.visibility = true;
            else
                proj.visibility = false;
        })

        prof.playgrounds.data.forEach((playg)=>{
            if( (document.getElementById(`PlaygCheckbox${playg.id}`) as HTMLInputElement).checked == true )
                playg.visibility = true;
            else
                playg.visibility = false;
        })

        prof.certificates.data.forEach((certi)=>{
            if( (document.getElementById(`CertiCheckbox${certi.id}`) as HTMLInputElement).checked == true )
                certi.visibility = true;
            else
                certi.visibility = false;
        })


        localStorage.setItem("userProfile", JSON.stringify(prof));
    }

    return (
        <div>
            <NavBar/> 
            <div className="flex w-full">
                <EditTabsComp tabs = {2} />
                <div className="py-4 px-8 w-6/12">
                    <form className="flex flex-col space-y-8 w-full">

                        <div className='flex flex-col space-y-16'>
                            <div className="space-y-8">
                                <div className="flex justify-between">
                                    <p className="mb-4 text-3xl font-bold">Projects</p>
                                    <Link href="/profile/edit/newprojectform">
                                    <button className="mb-4 text-xl text-blue-500 font-bold">Create new project</button>
                                    </Link>

                                </div>
                                <div className="flex flex-wrap justify-between mb-10">
                                    {prof.projects.data.map((proj)=>{
                                        return (
                                            <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-4 p-4 relative">
                                                <input type="checkbox" className="absolute right-0 top-0 h-6 w-6" defaultChecked={proj.visibility} id={`ProjCheckbox${proj.id}`}/>
                                                <img className="rounded-lg mb-4" src={proj.bhimage}/>
                                                <p className="font-bold mb-2">{proj.title}</p>
                                                <div className="flex">
                                                    {proj.techUsed.map( (item: Number) => {
                                                        return (<div className="flex items-center flex-wrap">
                                                            <img className="h-4 mr-2" src={technology[Number(item)].url}/>
                                                            <p className="text-base font-semibold text-gray-600 mr-4">{technology[Number(item)].name}</p>
                                                            </div>)
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="space-y-8">
                                <p className="mb-4 text-3xl font-bold">Playgrounds</p>
                                <div className="flex flex-wrap justify-between mb-10">
                                    {prof.playgrounds.data.map((playg)=>{
                                        return (
                                            <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-4 p-4 relative">
                                                <input type="checkbox" className="absolute right-0 top-0 h-6 w-6" defaultChecked={playg.visibility} id={`PlaygCheckbox${playg.id}`}/>
                                                <p className="font-bold mb-2">{playg.title}</p>
                                                <p className="text-base mb-2">Edited {playg.timeStamp} mins ago. Shared with {playg.sharedWith.length} people.</p>
                                                    <div className="flex">
                                                        {playg.techUsed.map( (item: Number) => {
                                                            return (<div className="flex items-center flex-wrap">
                                                                <img className="h-4 mr-2" src={technology[Number(item)].url}/>
                                                                <p className="text-base font-semibold text-gray-600 mr-4">{technology[Number(item)].name}</p>
                                                                </div>)
                                                        })}
                                                    </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="space-y-8">
                                <p className="mb-4 text-3xl font-bold">Certificates</p>
                                <div className="flex flex-wrap mb-10 justify-between">
                                    {prof.certificates.data.map((certi)=>{
                                        return ( 
                                            <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-4 p-4 relative">
                                                <input type="checkbox" className="absolute right-0 top-0 h-6 w-6" defaultChecked={certi.visibility} id={`CertiCheckbox${certi.id}`}/>
                                                <img className="h-14 mr-2 mb-4" src={technology[certi.techUsed].url}/>
                                                <p className="font-bold mb-2">{certi.title}</p>
                                                <p className="text-base mb-2">Issued on {certi.dateIssued}.</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
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