import { useState, useEffect, useRef } from "react";
import { tempuserProfile } from "@/data/profile";

export const ProfileFormComp = () => {
    const [prof, setProf] = useState(tempuserProfile);

    const [url, setUrl] = useState('');

    const ref = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        setProf(JSON.parse(localStorage.getItem('userProfile') || '{}'));
    },[])


    const handleClick = () => {
        ref.current?.click();
    };

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        if(!event.target.files)
        return;
        if(event.target.files[0]){
            console.log('Image was uploaded');
            console.log(event.target.files[0]);
            // setSelectedImage(event.target.files[0] );
            setUrl(URL.createObjectURL(event.target.files[0]));
            prof.profileImage = URL.createObjectURL(event.target.files[0]);
            console.log(prof);
            localStorage.setItem("userProfile", JSON.stringify(prof));
        }
        else{
            console.log('No image was uploaded')
        }
    }

    const handleDelete = () => {
        prof.profileImage = '';
        console.log(prof);
        localStorage.setItem("userProfile", JSON.stringify(prof));
    }


    // const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log('First name changed to : ' + event.target.value);
    //     setFirstNameState(event.target.value);
    // }

    const handleClickSubmit = () => {
        const firstNameFinal = (document.getElementById('firstNameID') as HTMLInputElement).value;
        const lastNameFinal = (document.getElementById('lastNameID') as HTMLInputElement).value;
        const aboutFinal = (document.getElementById('aboutID') as HTMLInputElement).value;
        const professionFinal = (document.getElementById('professionID') as HTMLInputElement).value;
        const dobFinal = (document.getElementById('dobID') as HTMLInputElement).value;
        const genderFinal = (document.getElementById('genderID') as HTMLInputElement).value;
        const countCheckboxFinal = (document.getElementById('countCheckboxID') as HTMLInputElement).value;
        const statsCheckboxFinal = (document.getElementById('statsCheckboxID') as HTMLInputElement).value;


        prof.firstName = firstNameFinal;
        prof.lastName = lastNameFinal;
        prof.about = aboutFinal;
        prof.profession = professionFinal;
        prof.dob = dobFinal;
        prof.gender = genderFinal;
        // console.log(countCheckboxFinal);
        // prof.count.visibility = countCheckboxFinal;
        // prof.stats.visibility = statsCheckboxFinal;

        localStorage.setItem("userProfile", JSON.stringify(prof));
    }

    return (
        <div className="px-4 w-9/12">
            <form className="flex flex-col space-y-4">
                <div className="flex items-center space-x-8">
                    <img
                    src={prof.profileImage}
                    className="h-20 w-20 rounded-full object-cover"
                    alt="profile image" />
                    
                    <div onClick={handleClick} className="px-4 h-10 flex items-center bg-blue-700 text-gray-50 rounded-lg hover:bg-blue-900 cursor-pointer">
                    <span>Upload new picture</span>
                    <input
                        type="file"
                        name="myImage"
                        className="hidden"
                        ref={ref}
                        onChange={handleChange}
                    />
                    </div>
                    
                    <div onClick={handleDelete} className="px-4 h-10 flex items-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 cursor-pointer">
                    <span>Delete</span>
                    </div>
                        
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className="font-medium " >Display name</label>
                    <div className="flex space-x-4">
                        <input defaultValue={prof.firstName} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-2/6" type="text" id="firstNameID"/>
                        <input defaultValue={prof.lastName} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-2/6" type="text" id="lastNameID" />
                    </div>
                    <p className="text-gray-500">Name entered above will be used for all issued certificates.</p>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">About</label>
                    <input defaultValue={prof.about} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="aboutID" />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Profession</label>
                    <input defaultValue={prof.profession} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="professionID"/>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Date of birth</label>
                    <input defaultValue={prof.dob} className="border border-gray-200 h-10 px-4 py-2 rounded-md w-4/6" type="text" id="dobID" />
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className="font-medium">Gender</label>
                    <select defaultValue={prof.gender} id="genderID" className="w-4/6 border border-gray-200 h-10 px-4 py-2 rounded-md px-2">
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>

                <div className="space-y-2 w-4/6">
                    <p className="text-xl font-medium pt-8 font-bold">Section visibility</p>
                    <p className="text-gray-500">Select which sections should show on your profile page.</p>
                    <div className="mx-8 w-11/12">
                        <div className="flex p-2 w-full">
                            <div className="p-2 w-10/12">
                                <p className="text-gray-900 font-bold">Followers and following</p>
                                <p className="text-gray-500">Shows your followers and following count on codedamn.</p>
                            </div>
                            <div className="flex justify-center items-center p-2">
                                <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked={prof.count.visibility} className="sr-only peer" id="countCheckboxID"/>
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                        </div>
                        <div className="flex p-2 w-full">
                            <div className="p-2 w-10/12">
                                <p className="text-gray-900 font-bold">Stats</p>
                                <p className="text-gray-500">Shows your stats.</p>
                            </div>
                            <div className="flex justify-center items-center p-2">
                                <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked={prof.stats.visibility} className="sr-only peer" id="statsCheckboxID"/>
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                        </div>
                        {/* <div className="flex p-2 w-full">
                            <div className="p-2 w-10/12">
                                <p className="text-gray-900 font-bold">Achievement badges</p>
                                <p className="text-gray-500">Shows your realtive percentile and proficiency.</p>
                            </div>
                            <div className="flex justify-center items-center p-2">
                                <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                        </div> */}
                    </div>
                </div>

                <div className="flex pt-8 space-x-4 self-end">
                    <button className="px-4 h-10 flex items-center bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 cursor-pointer" type="submit">Cancel</button>
                    <button className="px-4 h-10 flex items-center bg-blue-700 text-gray-50 rounded-lg hover:bg-blue-900 cursor-pointer" onClick={handleClickSubmit} type="submit">Save changes</button>
                </div>
            </form>
        </div>
    );
}