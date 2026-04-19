import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-semibold '>1</h2>
                <div>
                    <p className='text-lg leading-normal text-white mb-10'> Prime customers, that have access to bank credit and are satisfied with the current product</p>
              
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white py-2 px-8 rounded-full font-medium'>{props.tag}</button>
                    <button className='bg-blue-600 text-white py-2 px-4 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>

                  </div>
        </div>
    </div>
  )
}

export default RightCardContent