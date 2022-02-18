import React, {useState} from 'react'

function Home() {
    const [value, setValue] = useState('')

    return (
        <div>
            <div className='text-blue-500 text-2xl border border-gray-300'>
                hey Emma
            </div>
            <input
                data-cy="test-input"
                value={value}
                className='border border-gray-300'/>
        </div>
    );
}

export default Home;
