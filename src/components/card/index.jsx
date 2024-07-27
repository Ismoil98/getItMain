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
            <button className='demo'>
                Демоверсия
            </button>
        </div>
        <div className='content'>
            <a className='title'>
                <Image src='/icons/external_link.svg' alt='icon' width={16} height={16}/>
                Металлоконструкций
            </a>
            <a className='price' href='#' target="/blank">
                <Image src='/icons/tag.svg' alt='icon' width={16} height={16}/>
                5 000 000 сум
            </a>
        </div>
    </div>
  )
}

export default card