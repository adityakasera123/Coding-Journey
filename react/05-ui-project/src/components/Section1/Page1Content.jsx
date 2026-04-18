import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const page1Content = () => {
  return (
    <div className='py-5 flex items-center gap-10 h-[86vh]  px-15 '>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default page1Content