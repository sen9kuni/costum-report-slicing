import { useState } from 'react'
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from 'react-icons/bs'

export default function ButtonTable() {
  const [number, setNumber] = useState(1)
  const sumNum = () => {
    setNumber(number + 1)
  }
  const minNum = () => {
    setNumber(number - 1)
  }
  const minimumNum = () => {
    setNumber(1)
  }
  const maximumNum = () => {
    setNumber(7)
  }
  return (
    <div className='w-[166px] h-[34px] bg-white grid grid-cols-5 items-center rounded-md border-2 border-slate-300 overflow-hidden'>
      <button
        disabled={number === 1}
        onClick={() => minimumNum()}
        className='border-r-2 border-slate-300 h-full w-full flex justify-center items-center text-[#445AD2] active:bg-slate-300 disabled:bg-slate-300 disabled:text-white'
      >
        <BsFillSkipStartFill size={20} />
      </button>
      <button
        disabled={number === 1}
        onClick={() => minNum()}
        className='h-full w-full flex justify-center items-center text-[#445AD2] active:bg-slate-300 disabled:bg-slate-300 disabled:text-white'
      >
        <BsFillCaretLeftFill size={20} />
      </button>
      <div className='flex justify-center items-center bg-[#465DEF] w-full h-full text-white font-bold disabled:bg-slate-300 disabled:text-white'>
        <span>{number}</span>
      </div>
      <button
        disabled={number === 7}
        onClick={() => sumNum()}
        className='h-full w-full flex justify-center items-center text-[#445AD2] active:bg-slate-300 disabled:bg-slate-300 disabled:text-white'
      >
        <BsFillCaretRightFill size={20} />
      </button>
      <button
        disabled={number === 7}
        onClick={() => maximumNum()}
        className='border-l-2 border-slate-300 h-full w-full flex justify-center items-center text-[#445AD2] active:bg-slate-300 disabled:bg-slate-300 disabled:text-white'
      >
        <BsFillSkipEndFill size={20} />
      </button>
    </div>
  )
}
