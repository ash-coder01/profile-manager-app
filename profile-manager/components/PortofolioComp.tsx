import { technology } from "@/data/profile";
import { useState, useEffect } from 'react';
import { tempuserProfile } from "@/data/profile";

export const PortfolioComp = () => {
    // const profile = JSON.parse(localStorage.getItem('userProfile') || '{}')
    const [prof, setProf] = useState(tempuserProfile);

    useEffect(()=>{
        setProf(JSON.parse(localStorage.getItem('userProfile') || '{}'));
    },[])

    return(
        <div className="px-2">
        <div className="text-3xl font-bold">
            <p className="mb-8">Stats</p>
            <div className="flex flex-wrap justify-between mb-10">
                <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-2 flex">
                        <div className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <div className="p-2">
                            <p className="font-bold">{prof.streak}</p>
                            <p className="text-lg font-semibold text-gray-600">Longest streak</p>
                        </div>
                </div>
                <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-2 flex">
                        <div className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="DodgerBlue" viewBox="0 0 24 24" stroke-width="1.5" stroke="DodgerBlue" className="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                        </div>
                        <div className="p-2">
                            <p className="font-bold">{prof.stats.xpPoints}</p>
                            <p className="text-lg font-semibold text-gray-600">Experience points</p>
                        </div>
                </div>
                <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 flex">
                        <div className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" className="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>
                        </div>
                        <div className="p-2">
                            <p className="font-bold">
                                { (prof.stats.xpPoints) > 1000 ? "Expert" : (prof.stats.xpPoints) > 500 ? "Imtermediate" : "Novice"}
                            </p>
                            <p className="text-lg font-semibold text-gray-600">Current league</p>
                        </div>
                </div>
                <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 flex">
                        <div className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="pink" viewBox="0 0 24 24" stroke-width="1.5" stroke="pink" className="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        </div>
                        <div className="p-2">
                            <p className="font-bold">
                                {prof.stats.karmaPoints}
                            </p>
                            <p className="text-lg font-semibold text-gray-600">Karma points</p>
                        </div>
                </div>
            </div>

            <p className="mb-4">Projects</p>
            <div className="flex flex-wrap justify-between mb-10">
                {prof.projects.data.map((proj)=>{
                    return ( proj.visibility &&
                        <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-4 p-4">
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

            <p className="mb-4">Playgrounds</p>
            <div className="flex flex-wrap justify-between mb-10">
                {prof.playgrounds.data.map((playg)=>{
                    return ( playg.visibility &&
                        <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-4 p-4">
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

            <p className="mb-4">Certificates</p>
            <div className="flex flex-wrap mb-10 justify-between">
                {prof.certificates.data.map((certi)=>{
                    return ( certi.visibility &&
                        <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-5/12 mb-4 p-4">
                            <img className="h-14 mr-2 mb-4" src={technology[certi.techUsed].url}/>
                            <p className="font-bold mb-2">{certi.title}</p>
                            <p className="text-base mb-2">Issued on {certi.dateIssued}.</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    );
}