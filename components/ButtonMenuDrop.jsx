import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

export default function ButtonMenuDrop({ logo, name, subLogo, subName }) {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col w-full'>
      <button
        onClick={() => setOpen(!open)}
        className='group w-full h-[43px] bg-white flex flex-row justify-between items-center gap-4 hover:bg-[#C7CEFF] focus:bg-[#C7CEFF] hover:bg-opacity-50'
      >
        <div className='flex flex-row justify-start items-center gap-4'>
          <div className='w-[22px] overflow-hidden'>
            <div className='w-1 h-10 group-focus:bg-[#0F2ABA]' />
          </div>
          <div className='text-slate-600 group-focus:text-[#445AD2] group-hover:text-[#445AD2]'>
            {logo}
          </div>
          <span className='text-slate-600 group-focus:text-[#0F2ABA] group-hover:text-[#0F2ABA]'>
            {name}
          </span>
        </div>
        <div className='pr-3 group-focus:text-[#0F2ABA]'>
          {open ? <BiChevronUp size={25} /> : <BiChevronDown size={25} />}
        </div>
      </button>
      {open ? (
        <button className='group w-full h-[43px] bg-white flex flex-row justify-start items-center gap-4 hover:bg-[#C7CEFF] focus:bg-[#C7CEFF] hover:bg-opacity-50'>
          <div className='w-[50px] overflow-hidden'>
            <div className='w-1 h-10 group-focus:bg-[#0F2ABA]' />
          </div>
          <div className='text-slate-600 group-focus:text-[#445AD2] group-hover:text-[#445AD2]'>
            {subLogo}
          </div>
          <span className='text-slate-600 group-focus:text-[#0F2ABA] group-hover:text-[#0F2ABA]'>
            {subName}
          </span>
        </button>
      ) : null}
    </div>
  )
}
