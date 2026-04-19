import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div  className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-5 w-2/3 p-4'>
      {props.users.map(function(elem){
        return <Rightcard img={elem.img} tag={elem.tag}/>
      })}
      

    </div>
  )
}

export default RightContent