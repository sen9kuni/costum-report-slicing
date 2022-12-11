import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { BsArrowDownCircle } from 'react-icons/bs'
import Selector from './Selector'
import LabelChart from './LabelChart'

const option = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

export default function StackCharts({ dataSet, label, dataLabel }) {
  return (
    <div className='bg-white w-full flex flex-col items-center p-[42px] rounded-lg'>
      <div className='w-full flex flex-row justify-between items-center mb-5'>
        <span className='font-bold text-xl'>{label}</span>
        <div className='flex flex-row gap-3 items-center'>
          <Selector />
          <button className='w-[36px] h-[36px] border-2 border-slate-400 rounded-md flex justify-center items-center active:bg-[#445AD2] text-slate-500 active:text-white active:border-0'>
            <BsArrowDownCircle size={20} />
          </button>
        </div>
      </div>
      <div className='w-full flex flex-row justify-between'>
        <span
          className='rotate-180 text-center font-medium text-[#525759]'
          style={{ writingMode: 'vertical-rl' }}
        >
          Total Ticket
        </span>
        <div className='w-[1000px] '>
          <Bar data={dataSet} options={option} />
        </div>
      </div>
      <div className='w-full h-full px-10 flex flex-wrap justify-center gap-1 mt-3'>
        <LabelChart
          background={dataLabel.bgColor}
          label={dataLabel.complainName}
        />
        <LabelChart
          background={dataLabel.bgColor2}
          label={dataLabel.complainName2}
        />
      </div>
    </div>
  )
}
