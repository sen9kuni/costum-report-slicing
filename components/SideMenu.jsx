import {
  BsBarChartFill,
  BsCheckSquareFill,
  BsCloudUploadFill,
  BsEmojiLaughingFill,
  BsFileEarmarkMedicalFill,
  BsFileEarmarkRuledFill,
  BsFillCloudUploadFill,
  BsFillFileEarmarkTextFill,
  BsFillInboxFill,
  BsHouseDoorFill,
  BsMegaphone,
  BsPersonBadgeFill,
  BsPuzzleFill,
  BsTools,
  BsWrench,
} from 'react-icons/bs'
import ButtonMenu from './ButtonMenu'
import ButtonMenuDrop from './ButtonMenuDrop'

export default function SideMenu() {
  return (
    <div className='col-span-2 flex flex-col h-full py-5 bg-white'>
      <button className='group w-full h-[43px] bg-white flex flex-row justify-start items-center gap-4 hover:bg-[#C7CEFF] focus:bg-[#C7CEFF] hover:bg-opacity-50'>
        <div className='w-[22px] overflow-hidden'>
          <div className='w-1 h-10 group-focus:bg-[#0F2ABA]' />
        </div>
        <div className='text-slate-600 group-focus:text-[#445AD2] group-hover:text-[#445AD2]'>
          <BsHouseDoorFill size={20} />
        </div>
        <span className='text-slate-600 group-focus:text-[#0F2ABA] group-hover:text-[#0F2ABA] '>
          Dashboard
        </span>
      </button>
      <ButtonMenu
        name={'Task Management'}
        logo={<BsCheckSquareFill size={20} />}
      />
      <ButtonMenuDrop
        name={'Integration'}
        logo={<BsWrench size={20} />}
        subName={'Integration Tool'}
        subLogo={<BsTools size={20} />}
      />
      <ButtonMenuDrop
        name={'Marketing'}
        logo={<BsMegaphone size={20} />}
        subName={'Marketing Report'}
        subLogo={<BsFileEarmarkMedicalFill size={20} />}
      />
      <ButtonMenuDrop
        name={'Customer Service'}
        logo={<BsFillInboxFill size={20} />}
        subName={'Customer Service Chat'}
        subLogo={<BsPersonBadgeFill size={20} />}
      />
      <ButtonMenuDrop
        name={'Bot Setting'}
        logo={<BsEmojiLaughingFill size={20} />}
        subName={'Bot Setting'}
        subLogo={<BsTools size={20} />}
      />
      <ButtonMenuDrop
        name={'Analityc'}
        logo={<BsBarChartFill size={20} />}
        subName={'Analityc Report'}
        subLogo={<BsFileEarmarkRuledFill size={20} />}
      />
      <ButtonMenuDrop
        name={'API'}
        logo={<BsFillCloudUploadFill size={20} />}
        subName={'API Setting'}
        subLogo={<BsPuzzleFill size={20} />}
      />
      <ButtonMenu
        name={'Documentation'}
        logo={<BsFillFileEarmarkTextFill size={20} />}
      />
    </div>
  )
}
