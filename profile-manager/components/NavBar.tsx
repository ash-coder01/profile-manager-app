import Image from 'next/image'
import { SearchBar } from './SearchBar';
export const NavBar = () => {
    return(
        <div>
            <div className=' px-8 py-4 flex justify-between items-center'>
                <div className='text-3xl font-bold'>codedamn</div>
                <div className='flex w-1/2 justify-between items-center'>
                    <SearchBar/>
                    <div className='flex w-12 justify-between items-center text-xl text-gray-600 font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>2
                    </div>
                    <div className='relative'>
                        <svg className="w-8 h-8 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
                        </svg>
                        <div className='absolute rounded-lg bg-pink-400 w-4 h-4 text-xs flex justify-center align-center top-0 right-0'>3</div>
                    </div>
                    <div className='h-14 w-14 rounded-full relative'>
                    <img
                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                        className="h-14 w-14 rounded-full object-cover"
                        alt="profile image" />
                        <div className='absolute rounded-full bg-black w-4 h-4 text-xs text-white flex justify-center align-center top-0 right-0'>5</div>
                    </div>
                </div>
            </div>
        </div>
    );
}