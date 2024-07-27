import Image from 'next/image'
import React from 'react'
import Filter from '../filter'


const index = () => {
  return (
    <section className='mx-auto w-[1424px] border rounded border-lines text-center pb-4 pt-14 bg-white'>
        <h1 className='font-sans mx-auto w-[583px] text-[40px] leading-[50px] mb-8'>
            Ваш  бизнес  заслуживает лучшего — Создайте идеальный 
            <div className='relative'>
                сайт
                <Image className='absolute top-0 left-40' src="/icons/star_icon.png" width={20} height={20} alt='star icon'/>
                с нами!
            </div>
        </h1>
        <p className='text-[11px] leading-[18px] mb-8'>
            Мы предлагаем готовые решения для вашего бизнеса с возможностью полной кастомизации под
            <br />
            ваш бренд. Быстро. Качественно. Доступно.
        </p>
        <button className='mb-24 bg-btnBg py-5 px-8 text-white text-[13px] rounded-full hover:opacity-70'>
            Заказать сайт
        </button>
        <Filter />
    </section>
  )
}

export default index