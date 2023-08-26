import { NavBar } from "@/components/NavBar";
import { ProfileDisplayComp } from "@/components/ProfileDisplayComp";
import { useEffect } from "react";
import { userProfile } from "@/data/profile";

export default function profileScreen() {

  // useEffect(()=>{
  //   localStorage.setItem("userProfile", JSON.stringify(userProfile));
  // },[])

  return (
    <main className="min-h-screen min-w-max items-center justify-center w-full">
      <NavBar/>
      <ProfileDisplayComp/>
    </main>
  )
}