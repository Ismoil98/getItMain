'use client'

import {useCardStore} from '../store/CardStore'
import Image from 'next/image'
import React from 'react'
import './card.scss'

const card = ({crs}) => {

    const {card4, card2} = useCardStore();
  return (
    
    <div className={card4 ? 'maining four' : 'maining binary'}>
        <div className='img_wrapper'>
            <Image src={crs} alt='site' width={308} height={392}/>
        </div>
        <div className='w-full h-[85px]'>
            <h3 className='text-[15px] leading-[18px] mt-5 mb-5'>
                Сайт металлоконструкций, ангаров
            </h3>
            <div className=''>
                <a href='#' target="/blank" className='text-[13px] leading-[15px] bg-pink-light text-pink py-[10px] rounded hover:opacity-70 px-5 mr-5'>
                    Демоверсия
                </a>
                <button className='text-[15px] leading-[18px]'>
                    3 600 000 сум
                </button>
            </div>
        </div>
    </div>
  )
}

export default card