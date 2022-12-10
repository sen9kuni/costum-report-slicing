import Image from 'next/image'
import { FiBell, FiChevronLeft, FiSettings } from 'react-icons/fi'

export default function Header() {
  return (
    <div className='w-full h-min-[62px] py-[13px] bg-white px-[24px] grid grid-cols-2'>
      <div className='col-span-1 grid grid-cols-6 items-center'>
        <div className='col-span-2 flex flex-row items-center gap-4'>
          <div className='relative'>
            <Image src={'/images/ic_dolphin.png'} width={30} height={30} />
          </div>
          <div className='flex flex-col'>
            <span className='font-bold text-slate-500'>3DOLPHINS</span>
            <span className='text-xs font-light text-slate-500'>
              Version 5.2.X
            </span>
          </div>
        </div>

        <button className='col-span-4 h-[36px] w-[36px] flex justify-center items-center shadow-sm rounded-md text-[#465DEF] hover:bg-slate-100 active:bg-[#465DEF] active:text-white '>
          <FiChevronLeft size={25} />
        </button>
      </div>

      <div className='col-span-1 grid grid-cols-5 gap-2'>
        {/* search */}
        <div className='col-span-3 flex flex-row gap-1 bg-[#F3F3F3] rounded-lg overflow-hidden'>
          <button className='w-[40px] h-[40px] flex justify-end items-center text-lg'>
            {/* <FiSearch size={20} /> */}
            <Image src={'/images/search.svg'} width={25} height={25} />
          </button>
          <input
            className='w-full outline-none bg-[#F3F3F3] placeholder:font-semibold'
            placeholder='Search'
          />
        </div>
        <div className='col-span-2 flex flex-row justify-around items-center'>
          <button className='h-[36px] w-[36px] flex justify-center items-center hover:bg-slate-100 rounded-lg active:text-white active:bg-[#445AD2]'>
            <FiBell size={20} />
          </button>
          <button className='h-[36px] w-[36px] flex justify-center items-center hover:bg-slate-100 rounded-lg active:text-white active:bg-[#445AD2]'>
            <FiSettings size={20} />
          </button>
          <div className='flex flex-col'>
            <span className='font-bold text-slate-600'>Sinangling E</span>
            <span className='text-xs font-light text-slate-600'>Operator</span>
          </div>
          <div className='w-[40px] h-[40px] rounded-full overflow-hidden bg-white relative hover:cursor-pointer'>
            <Image src={'/images/profile.png'} layout='fill' />
          </div>
        </div>
      </div>
    </div>
  )
}
