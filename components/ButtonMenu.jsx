export default function ButtonMenu({ logo, name }) {
  return (
    <button className='group w-full h-[43px] bg-white flex flex-row justify-start items-center gap-4 hover:bg-[#C7CEFF] focus:bg-[#C7CEFF] hover:bg-opacity-50'>
      <div className='w-[22px] overflow-hidden'>
        <div className='w-1 h-10 group-focus:bg-[#0F2ABA]' />
      </div>
      <div className='text-slate-600 group-focus:text-[#445AD2] group-hover:text-[#445AD2]'>
        {logo}
      </div>
      <span className='text-slate-600 group-focus:text-[#0F2ABA] group-hover:text-[#0F2ABA] '>
        {name}
      </span>
    </button>
  )
}
