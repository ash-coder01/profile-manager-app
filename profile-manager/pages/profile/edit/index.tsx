import { NavBar } from "@/components/NavBar";
import { ProfileDisplayComp } from "@/components/ProfileDisplayComp";
import { useEffect, useState } from "react";
import { profileType } from "@/data/typeP";
import { tempuserProfile, userProfile } from "@/data/profile";
import { FormComp } from "@/components/FormComp";

export default function editScreen() {
  const [objwithArr, setObjwithArr] = useState({id: 0, skills: [0,1]});
  const [prof, setProf] = useState<profileType>(tempuserProfile);

  useEffect(()=>{
    setObjwithArr({id:1, skills: [1,2,3,4]});
    setProf(JSON.parse(localStorage.getItem('userProfile') || '{}'));
  },[])
  
  return (
    <main className="min-h-screen min-w-max items-center justify-center w-full">
      {/* <div>
        object with array state: {objwithArr.skills[0]}
      </div>
      <div>
        profile state: {prof.projects.data.length}
      </div> */}
      <NavBar/>
      <FormComp/>
    </main>
  )
}