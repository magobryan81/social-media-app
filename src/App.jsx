import React from 'react';
import { Profile } from './components/sections/Profile';
import { Newsfeed } from './components/sections/Newsfeed';
import { Activity } from './components/sections/Activity';


const App = () => {
  return (
    <div className='bg-primary'>
        <header className='flex items-center justify-between py-5 px-24 border-b-gray-400 bg-white'>
            <h2 className='text-xl font-semibold'>SocialDev</h2>
            <img src="/user.png" height={30} width={30} alt="img" />
        </header>
        <div className='w-full min-h-screen flex flex-col lg:flex-row'>
            <aside className='w-full p-8'>
                <Profile/>
            </aside>
            <main className='w-full xl:p-8'>
                <Newsfeed/>
            </main>
            <aside className='w-full p-8'>
                <Activity/>
            </aside>

        </div>
    </div>
  )
}

export default App