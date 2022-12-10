import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { BsArrowDownCircle } from 'react-icons/bs'

const option = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

function BarCharts({ dataSet, label }) {
  return (
    <div className='bg-white w-full p-[42px] rounded-lg'>
      <div className='flex flex-row justify-between items-center mb-5'>
        <span className='font-bold text-xl'>{label}</span>
        <button className='w-[36px] h-[36px] border-2 border-slate-400 rounded-md flex justify-center items-center active:bg-[#445AD2] text-slate-500 active:text-white active:border-0'>
          <BsArrowDownCircle size={20} />
        </button>
      </div>
      <Bar data={dataSet} options={option} />
    </div>
  )
}

export default BarCharts
