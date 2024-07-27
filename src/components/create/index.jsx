import React from 'react'

const index = () => {
  return (
    <section className='container flex justify-between mt-20'>
        <div className='w-[848px] mr-4 pt-[80px] pl-[80px] pr-[185px] pb-[114px] border border-lines rounded bg-white'>
            <h2 className='text-[40px] leading-[50px] mb-[60px]'>
                Ваш  бизнес  заслуживает 
                <br />
                лучшего — Создайте идеальный сайт   с нами!
            </h2>
            <button className='bg-btnsBg w-[461px] px-8 py-5 rounded-full hover:opacity-70'>
                Зарегистрироватся как разработчик
            </button>
        </div>
        <div className='w-[416px] border border-lines rounded bg-white pt-20 pl-[54px]'>
            <h2 className='font-normal w-[332px] text-[22px] leading-[26px] mb-[132px]'>
                Ваш  бизнес  заслуживает лучшего — Создайте идеальный сайт   с нами!
            </h2>
            <button className='bg-black text-white py-5 px-8 rounded-full hover:opacity-70'>
                Войти в свой кабинет
            </button>
        </div>
    </section>
  )
}

export default index