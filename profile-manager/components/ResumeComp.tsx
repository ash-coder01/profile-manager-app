import { technology } from "@/data/profile";

export const ResumeComp = () => {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}')
    return(
        <div className="px-2">
            <div className="text-3xl font-bold">
                <p className="mb-8">About me</p>
                <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-full mb-10 p-4">
                    <p className="text-lg font-semibold text-gray-900 mb-4">{profile.description}</p>
                    <button className="text-gray-900 font-semibold text-base bg-gray-200 px-4 py-2 rounded-lg">
                        Read more
                    </button>
                </div>

                <p className="mb-8">Work experience</p>
                <div className="mb-10">
                {profile.workExperience.data.map((wexp) => {
                    return(
                        <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-full mb-2 p-4 flex">
                            <img className="w-14 h-14" src={wexp.companyLogo}/>
                            <div className="px-4 w-full">
                                <p className="font-semibold mb-2">{wexp.position} at {wexp.companyName}</p>
                                <div className="flex justify-between mb-4">
                                    <p className="text-base">{wexp.location}</p>
                                    <p className="text-base font-semibold">{wexp.startDate} - {wexp.endDate}</p>
                                </div>
                                <p className="text-sm w-96">{wexp.description}</p>
                            </div>
                        </div>
                    )
                })}
                </div>

                <p className="mb-8">Education</p>
                <div className="mb-10">
                {profile.education.data.map((edu) => {
                    return(
                        <div className="text-xl font-light border border-gray-150 bg-gray-50 rounded-lg w-full mb-2 p-4 flex">
                            <img className="w-14 h-14" src={edu.collegeLogo}/>
                            <div className="px-4 w-full">
                                <p className="font-semibold mb-2">{edu.collegeName}</p>
                                <div className="flex justify-between mb-4">
                                    <p className="text-base">{edu.location} || {edu.degree}, {edu.major}</p>
                                    <p className="text-base font-semibold">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>

                <p className="mb-8">Technical Skills</p>
                <div className="mb-10 flex justify-between flex-wrap">
                {profile.skills.map((sk) => {
                    return(
                        <div className="text-lg h-12 font-light border border-gray-150 bg-gray-50 rounded-lg px-4 py-2 mb-2 flex content-center">
                            <img className="w-8 h-8 mr-4" src={technology[sk].url}/>
                            <p className="font-semibold mb-2">{technology[sk].name}</p>
                        </div>
                    )
                })}
                </div>

                <p className="mb-8">Interests</p>
                <div className="mb-10 flex justify-between flex-wrap">
                {profile.interests.data.map((i) => {
                    return(
                        <div className="text-lg h-12 font-light border border-gray-150 bg-gray-50 rounded-lg px-4 py-2 mb-2 flex content-center">
                            {/* <img className="w-8 h-8 mr-4" src={technology[sk].url}/> */}
                            <p className="font-semibold mb-2">{i.name}</p>
                        </div>
                    )
                })}
                </div>

                <p className="mb-8">Languages</p>
                <div className="mb-10 flex flex-wrap">
                {profile.languages.data.map((i) => {
                    return(
                        <div className="text-lg h-12 font-light border border-gray-150 bg-gray-50 rounded-lg px-4 py-2 mb-2 mr-4 flex content-center">
                            {/* <img className="w-8 h-8 mr-4" src={technology[sk].url}/> */}
                            <p className="font-semibold mb-2">{i.name}</p>
                        </div>
                    )
                })}
                </div>
            </div>
       </div>
    );
}