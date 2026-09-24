import { popularPost } from "../../data/NewsfeedData"

export const Activity = () => {
  return (
    <div className='flex items-center md:justify-start xl:p-4'>
        <div className='flex flex-col gap-4 bg-secondary rounded-md p-8 w-full xl:w-[75%]'>
          <div className='border-border border-b py-4'>
              <h4 className='text-xl'>Popular Posts</h4>
          </div>
          {popularPost.map((data) => (
            <div className='flex flex-col items-start gap-4 border-border border-b pb-4'>
                <div className='flex items-center justify-center gap-2'>
                    <span>{data.author}</span>
                    <span className='text-sm text-label'>•</span>
                    <span className='text-sm text-label'>2 hours ago</span>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <p>{data.text}</p>
                    <span className='text-sm text-label'>40 likes</span>
                </div>
            </div>
          ))}
        </div>
      </div>
  )
}
