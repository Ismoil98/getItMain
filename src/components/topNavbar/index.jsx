import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const index = () => {
  return (
    <div className='container mt-6 mb-4'>
      <div className="flex items-center w-[408px] gap-4 justify-between">
        <Link className="text-[13px] leading-[15px] flex items-center fw-bold" href='/'>
          <FaArrowLeft className="mr-1 w-4 h-4"/>
            Назад
        </Link>
        <Link className="text-[13px] leading-[15px] " href='/categories/Бизнес'>
            Бизнес-сайт
        </Link>
        <Link className="text-[13px] leading-[15px] " href='/products/1'>
            Сайт металлоконструкций, ангаров
        </Link>
      </div>
    </div>
  )
}

export default index