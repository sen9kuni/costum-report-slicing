import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'

export default function LineTable({ data }) {
  return (
    <tr
      className={`h-[50px] border-t-2 border-slate-300 text-[#292B2C] ${
        data.id % 2 == 0 ? 'bg-[#F3F3F3]' : 'bg-white'
      }`}
    >
      <td></td>
      <td className='truncate'>{data.issueInvestigator}</td>
      <td>{data.category}</td>
      <td>{data.subCategory}</td>
      <td>{data.brand}</td>
      <td>{data.packagingType}</td>
      <td>{data.source}</td>
      <td>{data.averageDays}</td>
      <td className='h-[50px] flex flex-row justify-start items-center gap-2'>
        <BsFillCircleFill
          size={10}
          color={
            data.Conclusion === 'Conclution no judge'
              ? '#6771DC'
              : data.Conclusion === 'Not Justified'
              ? '#DC67AC'
              : data.Conclusion === 'Justified'
              ? '#DCD267'
              : '#67DC97'
          }
        />{' '}
        {data.Conclusion}
      </td>
    </tr>
  )
}
