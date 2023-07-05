import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img src='https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png' alt='hambarger img' className="h-12   hover:bg-gray-400  rounded-full" />
            <img src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' alt='youtube logo' className='h-12'/>
        </div>
        <div className='col-span-10 text-center pt-1 h-12'>
            <input type="text" className='w-1/2  border border-gray-400 p-2 rounded-l-full'/>
            <button className='border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100'>🔍</button>

        </div>
        <div className='col-span-1'>
            <img alt="userIcon" src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' className='h-12 pl-2 pt-1'/>
        </div>
    </div>

  );
}

export default Head;