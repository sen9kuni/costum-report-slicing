import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { BsArrowDownCircle } from 'react-icons/bs'
import LabelChart from './LabelChart'

const option = {
  responsive: true,
  cutout: 150,
  plugins: {
    legend: {
      display: false,
    },
  },
}

function DoughnutChart({ dataSet, label, dataLabel }) {
  return (
    <div className='flex flex-col gap-5 justify-center max-w-[543px]'>
      <div className='bg-white min-w-[543px] min-h-[528px] p-[42px] flex flex-col justify-center items-center rounded-lg'>
        <div className='w-full flex flex-row justify-between items-center mb-5'>
          <span className='font-bold text-xl'>{label}</span>
          <button className='w-[36px] h-[36px] border-2 border-slate-400 rounded-md flex justify-center items-center active:bg-[#445AD2] text-slate-500 active:text-white active:border-0'>
            <BsArrowDownCircle size={20} />
          </button>
        </div>
        <Doughnut data={dataSet} options={option} />
      </div>
      <div className='w-full h-full px-10 flex flex-wrap justify-center gap-1 mt-3'>
        {dataLabel.map((e) => (
          <LabelChart background={e.bgColor} label={e.name} />
        ))}
      </div>
    </div>
  )
}

export default DoughnutChart
