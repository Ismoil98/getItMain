'use client'

import {useCardStore} from '../store/CardStore'
import Image from 'next/image'
import React from 'react'
import './card.scss'
import Link from 'next/link'

const card = ({item}) => {
 
const {card4} = useCardStore();

return (
    <section className={card4 ? 'maining four' : 'maining binary'}>
        <a href={`/products/${item.id}`}>
            <div className='img_wrapper'>
                <Image src={`https://cdn.getter.uz/api/v1/media/${item.media[0]}/open`} quality={100} alt='site' width={800} height={677}/>
                <a href={item.link} target='_blank' className='demo'>
                    Демоверсия
                </a>
            </div>
        </a>
        <div className='content'>
            <a className='title'  href={`/products/${item.id}`}>
                <Image src='/icons/external_link.svg' alt='icon' width={16} height={16}/>
                <p>{item.title}</p>
            </a>
            <a className='price' href='#' target="/blank">
                <Image src='/icons/tag.svg' alt='icon' width={16} height={16}/>
            <p>{item.licensedPrice} сум</p>
            </a>
        </div>
    </section>
  )
}

export default card