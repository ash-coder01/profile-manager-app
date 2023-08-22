import Image from 'next/image'
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';
export const NavBar = () => {
    // localStorage.setItem("profileImage", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80");
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}')
    return(
        <div>
            <div className=' px-8 py-2 flex justify-between items-center'>
                <div className='text-xl font-semibold'>codedamn</div>
                <div className='w-1/6 flex justify-between'>
                    <button id="dropdownDefaultButtonLearn" data-dropdown-toggle="dropdownLearn" className="text-gray-500 font-medium text-m text-center inline-flex items-center w-25" type="button">
                            Learn 
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <button id="dropdownDefaultButtonPractice" data-dropdown-toggle="dropdownPractice" className="text-gray-500 font-medium text-m text-center inline-flex items-center w-25" type="button">
                            Practice
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <button id="linkButtonPricing" className="text-gray-500 font-medium text-m text-center inline-flex items-center w-25" type="button">
                            Pricing
                    </button>
                </div>
                <SearchBar/>
                <div className='flex w-2/12 justify-around items-center'>
                    
                    <div className='flex w-8 justify-between items-center text-lg text-gray-600 font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>{profile.streak}
                    </div>
                    <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <div className='relative'>
                        <svg className="w-6 h-6 text-gray-600 relative" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
                        </svg>
                        <div className='absolute rounded-lg bg-pink-400 w-4 h-4 text-xs flex justify-center align-center top-0 right-0'>{profile.notificationCount}</div>
                    </div>
                    <div className='h-10 w-10 rounded-full relative'>
                        <img
                        src={profile.profileImage}
                        className="h-10 w-10 rounded-full object-cover"
                        alt="profile image" />
                        <div className='absolute rounded-full bg-black w-4 h-4 text-xs text-white flex justify-center align-center top-0 right-0'>
                            {Math.ceil(profile.stats.karmaPoints/10)}
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}