import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const page1Content = () => {
  return (
    <div className='py-1 flex items-center gap-10 h-[86vh] bg-amber-200 px-15 '>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default page1Content