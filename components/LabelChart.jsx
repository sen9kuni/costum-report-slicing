import React from 'react'

export default function LabelChart({ label, background }) {
  return (
    <div className='min-w-[117px] max-h-[30px] px-[12px] py-[9px] flex flex-row justify-start items-center gap-2 border-2 border-slate-100'>
      <div className={`w-[32px] h-[12px] ${background}`} />
      <span className='text-[#292B2C] text-base'>{label}</span>
    </div>
  )
}
