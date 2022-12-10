import React, { useState } from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

export default function Selector() {
  const [selected, setSelected] = useState('January')
  const [open, setOpen] = useState(false)
  const selec = (e) => {
    setSelected(e)
    setOpen(false)
  }
  return (
    <div className='w-[166px] h-[32px]'>
      <div
        className='bg-white w-full h-full flex justify-between items-center px-3 border-2 border-slate-300 rounded-lg'
        onClick={() => setOpen(!open)}
      >
        <span>{selected}</span>
        {open ? (
          <BsFillCaretUpFill size={15} />
        ) : (
          <BsFillCaretDownFill size={15} />
        )}
        {/* <BsFillCaretDownFill size={15} /> */}
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto z-50 absolute w-[166px] ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('January')}
        >
          January
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('February')}
        >
          February
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('March')}
        >
          March
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('April')}
        >
          April
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('May')}
        >
          May
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('June')}
        >
          June
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('July')}
        >
          July
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('August')}
        >
          August
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('September')}
        >
          September
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('October')}
        >
          October
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('November')}
        >
          November
        </li>
        <li
          className='p-2 text-sm hover:bg-[#6771DC] hover:text-white'
          onClick={() => selec('December')}
        >
          December
        </li>
      </ul>
    </div>
  )
}
