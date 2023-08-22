import { NavBar } from "@/components/NavBar";
import { ProfileSummaryComp } from "@/components/ProfileSummaryComp";

export default function profileScreen() {

  const userProfile = {
    id: 0,
    firstName: "Anna",
    lastName: "Cheng",
    about: "Frontend Developer at Codedamn | IIT Bombay'23",
    location: "Mumbai, India",
    status: "Looking for a job",
    profession: "Frontend Development",
    description: "A self-driven, versatile, reliable, diligent individual who is calm an…",
    gender: "Female",
    dob: "2000-01-01",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    backgroundImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    skills: [
      {id: 0, name: "HTML"},
      {id: 1, name: "CSS"},
      {id: 2, name: "JS"},
      {id: 3, name: "React"},
      {id: 4, name: "Next"},
      {id: 5, name: "Angular"}
    ],
    followers: { count: 55, visibility: true},
    following: { count: 34, visibility: true},
    streak: 3,
    notificationCount: 4,
    stats: {visibility: false, xpPoints: 482, karmaPoints: 58},
    links: {
      github: "",
      linkedin: "",
      facebook: "",
      instagram: "",
      dribbble: "",
      behance: "",
      visibility: true,
    }
  };

  // if (typeof window !== 'undefined') {
  //   console.log('You are on the browser')
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  //   console.log(localStorage.getItem('name')); // 👉️ "Tom"
  // } else {
  //   console.log('You are on the server')
  //   // 👉️ can't use localStorage
  // }

  return (
    <main className="min-h-screen min-w-max items-center justify-center">
      <NavBar/>
      <ProfileSummaryComp/>
    </main>
  )
}