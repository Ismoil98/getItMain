import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <footer className='font-sans container mt-24'>
      <Link className='' href='/'>
        <Image src="/GetIt_footer.svg" alt="logo site" width={79} height={38}/>
        <p className='text-[12px]'>Слоган вашего компания</p>
      </Link>
      <div className='flex  mt-9'>
        <span  className='w-[396px]'>
          <div className='flex items-center'>
            <ul className='w-[125px] h-[125px] flex flex-wrap gap-[5px] mr-6'>
              <li className='border-lines p-5 bg-white w-[60px] rounded-full hover:opacity-60'>
                <Image className='w-5 h-5' alt='icons' src="/telegram.svg" width={20} height={20} />
              </li>
              <li className='border-lines p-5 bg-white w-[60px] rounded-full hover:opacity-60'>
                <Image className='w-5 h-5' alt='icons' src="/facebook.svg" width={20} height={12} />
              </li>
              <li className='border-lines p-5 bg-white w-[60px] rounded-full hover:opacity-60'>
                <Image className='w-5 h-5' alt='icons' src="/instagram.svg" width={20} height={20} />
              </li>
              <li className='border-lines p-5 bg-white w-[60px] rounded-full hover:opacity-60'>
                <Image className='w-5 h-5' alt='icons' src="/twitter.svg" width={20} height={20} />
              </li>
            </ul>
            <span>
              <p className='text-[12px] mb-1'>
                Наш телефон:
              </p>
              <a className='hover:opacity-60 text-[22px] leading-[26px]' href="tel:+998 90 000-00-00">+998 90 000-00-00</a>
              <p className='text-[12px] mb-1 mt-[22px]'>
                Электронная почта:
              </p>
              <a className='hover:opacity-60 text-[22px] leading-[26px]' href="mailto:info@gmail.com">info@gmail.com</a>
            </span>
          </div>
            <p className='text-[12px] leading-[14px] mt-8'>
              Мы стремимся сделать процесс покупки простым и удобным, предлагая только лучшие решения для вашего интерьера. 
              С нами вы можете быть уверены в надежности, комфорте и стильном дизайне каждого изделия.
            </p>
        </span>
        <div className='w-[416px] ml-[34px]'>
          <p className='w-[380px] text-[12px] leading-[14px] mb-[100px]'>
            Мы стремимся сделать процесс покупки простым и удобным, предлагая только лучшие решения для вашего интерьера. 
            С нами вы можете быть уверены в надежности, комфорте и стильном дизайне каждого изделия.
          </p>
          <a className='hover:opacity-70 w-[416px] bg-white px-8 py-5 text-[13px]' href="#">
            Зарегистрироватся как разработчик
          </a>
        </div>
        <div className='w-[416px] ml-[34px]'>
          <p className='w-[380px] text-[12px] leading-[14px] mb-[86px]'>
            Мы стремимся сделать процесс покупки простым и удобным, предлагая только лучшие решения для вашего интерьера. 
            <br />
            <br />
            С нами вы можете быть уверены в надежности, комфорте и стильном дизайне каждого изделия.
          </p>
          <a className='hover:opacity-70 w-[416px] bg-white px-8 py-5 text-[13px]' href="#">
            Зарегистрироватся как разработчик
          </a>
        </div>
      </div>
      <div className='flex justify-between items-center bg-white py-5 pr-7 pl-6 mt-8'>
        <div>
          <ul className='flex justify-between items-center gap-5'>
            <li className='hover:opacity-70'>
              <p>
                Copyright @ 2024
              </p>
            </li>
            <li className='hover:opacity-70'>
              <a href="#">
                Terms of Use
              </a>
            </li>
            <li className='hover:opacity-70'>
              <a href="#">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <Link className='' href='/'>
        <Image src="/Getter.svg" alt="logo site" width={79} height={38}/>
      </Link>
      </div>
    </footer>
  )
}

export default index