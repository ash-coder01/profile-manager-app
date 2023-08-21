

export const SearchBar = () => {
    return(
        <div className="w-7/12">
            <form>
                <div className="flex border-gray-300 border-2 rounded-lg">
                    <button type="submit" className="text-gray-500 bg-gray-100 rounded-l-lg hover:bg-gray-200 w-10 pl-4 pr-8">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50" placeholder="Search" required></input>
                    
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-500 bg-gray-100 hover:bg-gray-200 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                        Courses
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}