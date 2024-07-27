import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const customSelectStyle = {
  padding: '13px',
  fontSize: '16px',
};

const optionStyle = {
  // padding: '10px',
};

const index = () => {
  return (
    <header className='font-sans select-none flex items-center justify-between mx-auto mb-[7px] bg-white p-1 max-w-[1424px] mt-[10px] rounded-custom border-[1px] border-lines'>
      <Link href="/">
        <Image src="/GetIt_header.svg" alt="logo site" width={60} height={30}/>
      </Link>
      <div className='flex gap-6'>
        <Link className='text-pink transition duration-300 ease-out hover:opacity-70' href='/'>Все сайты</Link>
        <Link className='transition duration-300 ease-out hover:opacity-70' href='/Корпоротивные'>Корпоротивные</Link>
        <Link className='transition duration-300 ease-out hover:opacity-70' href='/Бизнес'>Бизнес</Link>
        <Link className='transition duration-300 ease-out hover:opacity-70' href='/Интернет-магазины'>Интернет-магазины</Link>
        <Link className='transition duration-300 ease-out hover:opacity-70' href='/Каталог-товаров'>Каталог товаров</Link>
        <Link className='transition duration-300 ease-out hover:opacity-70' href='/Лендинги'>Лендинги</Link>
      </div>
      <div>
        <select style={customSelectStyle} className='appearance-none' name="language" id="language">
          <option  style={optionStyle} value="RU">RU</option>
          <option  style={optionStyle} value="UZ">UZ</option>
          <option  style={optionStyle} value="EN">EN</option>
        </select>
        <button className='bg-pink transition duration-300 ease-out hover:opacity-70 text-white py-[14px] px-[24px] rounded ml-[18px]'>
          Заказать сайт
        </button>
      </div>
    </header>
  )
}

export default index