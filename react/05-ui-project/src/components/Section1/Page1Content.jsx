import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const page1Content = (props) => {
  return (
    <div className='py-4 flex items-center gap-10 h-[86vh]  px-12 '>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default page1Content