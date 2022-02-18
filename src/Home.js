import React, {useState} from 'react'

function Home() {
    const [value, setValue] = useState('')

    return (
        <div className='p-10'>
            <div className='text-blue-500 text-2xl border border-gray-300'>
                hey Emma
            </div>
            <input
                data-cy="test-input"
                value={value}
                className='border border-gray-300'/>
            <div className='animate-bounce mt-10 bg-red-400 h-10 w-10'>
            </div>
            <div className='animate-pulse mt-10 bg-blue-400 h-10 w-10'>
            </div>
        </div>
    );
}

export default Home;
