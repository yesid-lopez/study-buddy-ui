import Image from 'next/image'
import math_girl from '../../public/math-girl.svg'

const NewCouseModalTitle = () => {
  //sm:h-32
  return (
    <div className='relative w-full h-48 sm:h-3'>
      <h2 className='text-2xl font-semibold mt-4'>
        Create New <br className='sm:hidden' /> Course
      </h2>
      <div className=' h-52 sm:h-48 absolute top-5 sm:top-[-32px] right-0 sm:hidden'>
        <Image
          src={math_girl}
          alt='study'
          width={50}
          height={50}
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  )
}

export default NewCouseModalTitle
