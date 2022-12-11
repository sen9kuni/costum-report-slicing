import { useState } from 'react'
import { BsArrowDownCircle, BsFillCaretDownFill } from 'react-icons/bs'
import { ComplaintHistory } from '../pages/Data'
import ButtonTable from './ButtonTable'
import LineTable from './LineTable'

export default function TabelHistory({ label }) {
  const [dataTabel] = useState(ComplaintHistory)
  return (
    <div className='w-full p-[42px] flex flex-col gap-2'>
      <div className='flex flex-row justify-between items-center mb-5'>
        <span className='font-bold text-xl'>{label}</span>
        <button className='w-[36px] h-[36px] border-2 border-slate-400 rounded-md flex justify-center items-center active:bg-[#445AD2] text-slate-500 active:text-white active:border-0'>
          <BsArrowDownCircle size={20} />
        </button>
      </div>
      <div className='flex flex-row gap-2 items-center text-[#525759]'>
        <span>Showing</span>
        <div className='w-[26px] h-[20px] border-2 border-slate-300 flex flex-row justify-around items-center'>
          <span>7</span>
          <BsFillCaretDownFill size={10} />
        </div>
        <span>from 7 tickets</span>
      </div>
      <table className='table-auto text-left w-full border-2 border-slate-300'>
        <thead className='h-20 text-[#292B2C]'>
          <th className='w-5'></th>
          <th>
            Issue <br />
            Investigator
          </th>
          <th>Category</th>
          <th>
            Sub <br /> Category
          </th>
          <th>Brand</th>
          <th>Packaging Type</th>
          <th>Source</th>
          <th>
            Average <br /> Days (TBC)
          </th>
          <th>Conclusion</th>
        </thead>
        <tbody>
          {dataTabel.map((e) => (
            <LineTable key={e.id} data={e} />
          ))}
        </tbody>
      </table>
      <div className='flex justify-end'>
        <ButtonTable />
      </div>
    </div>
  )
}
