import Link from "next/link"
import { technology } from "@/data/profile";

export const ProfileCardComp = () => {
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}')
    return(
        <div className=" rounded-lg border-gray-200 border mb-10">
                <div className='h-64 rounded-t-lg w-full'>
                <img
                src={profile.backgroundImage}
                className="h-64 w-full rounded-t-lg"
                alt="profile image" />
                </div>
                <div className='flex'>
                    <div className="w-1/4 relative">
                    <img
                    src={profile.profileImage}
                    className="h-44 w-44 rounded-full object-cover right-0 absolute -translate-y-1/2 border-white border-2"
                    alt="profile image" />
                    </div>
                    <div className=" w-3/4 p-4">
                        <div className="flex w-9/12 justify-between items-center">
                            <div className="text-3xl font-bold">
                                {profile.firstName} {profile.lastName}
                            </div>
                            <div className="text-gray-500 font-medium h-1/2 text-small text-center inline-flex items-center w-25 bg-yellow-300 px-4 rounded-lg">
                                Pro
                            </div>
                            <div className="text-gray-500 font-medium h-1/2 text-small text-center inline-flex items-center w-25 bg-gray-300 px-4 rounded-lg">
                                {profile.status}
                            </div>
                        </div>
                        <div className="text-gray-500 mt-2">
                            {profile.about}
                        </div>
                        <div className="flex items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <div className="text-gray-500 ">
                                {profile.location}
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap mt-10">
                        {profile.skills.map((sk) => {
                            return(
                                <div className="text-gray-800 font-medium h-1/2 text-small text-center inline-flex items-center w-25 bg-gray-200 px-4 rounded-lg mr-5 mb-2 py-1 px-4">
                                    {technology[sk].name}
                                </div>
                            )
                        })}
                        </div>
                        <div className="flex mt-16 justify-between">
                            <div className="flex">
                            {profile.links.github!=="" && <div className="rounded-lg border-gray-200 border mr-2 p-1"><Link href={profile.links.github}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            </Link></div>}
                            
                            {profile.links.facebook!=="" && <div className="rounded-lg border-gray-200 border mr-2 p-1"><Link href={profile.links.facebook}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-700"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            </Link></div>}

                            {profile.links.youtube!=="" && <div className="rounded-lg border-gray-200 border mr-2 p-1"><Link href={profile.links.youtube}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            </Link></div>}

                            {profile.links.linkedin!=="" && <div className="rounded-lg border-gray-200 border mr-2 p-1"><Link href={profile.links.linkedin}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            </Link></div>}

                            {profile.links.instagram!=="" && <div className="rounded-lg border-gray-200 border mr-2 p-1"><Link href={profile.links.instagram}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-pink-700"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            </Link></div>}

                            {profile.links.behance!=="" && <div className="rounded-lg border-gray-200 border mr-2 p-1"><Link href={profile.links.behance}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-700"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                            </svg>
                            </Link></div>}

                            {profile.links.dribbble!=="" && <div className="rounded-lg border-gray-200 border mr-2 p-1"><Link href={profile.links.dribbble}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-pink-600"
                            fill="currentColor"
                            // style="color: #ea4c89"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                            </svg>
                            </Link></div>}
                            </div>
                            <div>
                                <Link href="/profile/edit">
                                    <button className="text-gray-900 font-medium text-small h-8 mr-2 text-center inline-flex items-center w-25 bg-gray-200 px-4 rounded-lg">
                                    Edit profile
                                    </button>
                                </Link>
                                {/* <div className="text-gray-900 font-medium text-small h-8 mr-2 text-center inline-flex items-center w-25 bg-gray-200 px-4 rounded-lg">
                                    Edit profile
                                </div> */}
                                <div className="text-gray-900 font-medium text-small text-center h-8 inline-flex items-center w-25 bg-gray-200 px-4 rounded-lg">
                                    Follow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}