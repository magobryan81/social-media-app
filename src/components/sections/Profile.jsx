import React from 'react'

export const Profile = () => {
  
  return (
    <div className='flex items-center justify-end xl:p-4'>
        <div className='flex flex-col gap-4 bg-secondary rounded-md p-8 w-full xl:w-[50%]'>
          <div>
              <img src="/user.png" height={50} width={50} alt="img" />
          </div>
          <div className='border-border border-b pb-4'>
              <h4 className='text-xl'>Bryan Mago</h4>
              <span className='text-sm text-label'>Web Developer</span>
          </div>
          <div className='flex gap-4'>
              <div className='flex flex-col'>
                  <span>400</span>
                  <span className='text-sm text-label'>Followers</span>
              </div>
              <div className='flex flex-col'>
                  <span>24</span>
                  <span className='text-sm text-label'>Posts</span>
              </div>
          </div>
        </div>
      </div>
    )
}
