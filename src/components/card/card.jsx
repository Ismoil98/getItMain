'use client'

import {useCardStore} from '../store/CardStore'
import Image from 'next/image'
import React from 'react'

const card = ({crs}) => {

    const {card4, card2} = useCardStore();
  return (
    
    <div className={card4 ? 'w-[308px] select-none mt-6' : 'w-[632px] h-[477px] select-none mt-6'}>
        <Image className='w-full h-[392px] mb-4 border border-lines rounded' src={crs} alt='site' width={308} height={392}/>
        <h3 className='text-[15px] leading-[18px] mb-3'>
            Сайт металлоконструкций, ангаров
        </h3>
        <div className='w-full h-[85px]'>
            <a href='#' target="/blank" className='text-[13px] leading-[15px] bg-pink-light text-pink py-[10px] rounded hover:opacity-70 px-5 mr-5'>
                Демоверсия
            </a>
            <button className='text-[15px] leading-[18px]'>
                3 600 000 сум
            </button>
        </div>
    </div>
  )
}

export default card