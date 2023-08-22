
export const ProfileSummaryComp = () => {
    return(
        <div>
            <div className='bg-blue-900 h-64'>
                edit button
            </div>
            <div className='flex'>
                <div className="w-1/3">
                <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                className="h-44 w-44 rounded-full object-cover left-1/3 absolute -translate-x-full -translate-y-1/2 border-white border-2"
                alt="profile image" />
                </div>
                <div className="bg-red-200 w-2/3">
                    Anna Cheng
                
                </div>

            </div>
        </div>
    );
}