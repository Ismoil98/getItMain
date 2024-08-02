import Image from 'next/image';
import { FC } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

interface Technology {
  id: string;
  title: string;
}

interface Direction {
  id: string;
  title: string;
}

interface Developer {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

interface Category {
  id: string;
  title: string;
  type: string;
}

interface Product {
  id: string;
  title: string;
  media: string[];
  link: string;
  description: string;
  shortDescription: string;
  licensedPrice: string;
  regularPrice: string;
  fifthText: string;
  technologies: Technology[];
  directions: Direction[];
  developers: Developer[];
  categories: Category[];
}

interface DetailsProps {
  product: Product;
}

// const technalogies = ['#ui','#ux', '#responsive', '#html', '#react', '#java script', '#nest', '#socet', '#node.js']

const Info: FC<DetailsProps> = ({ product }) => {
  return (
    <>
      <section className=''>
        <p className='bg-black text-white w-[67px] text-[15px] leading-[18px] p-1 rounded mb-[2px]'># 10941</p>
        <div className='flex items-center justify-between w-[760px]'>
          <div className='flex items-center justify-between gap-4'>
            <button className='text-white bg-pink p-1 rounded'>{product.categories[0].title}</button>
            <p>{product.title}</p>
          </div>
          <a className='flex items-center' href={product.link}>
            <FaExternalLinkAlt className='mr-1'/>
            Демо версия
          </a>
        </div>
        <div className='w-[900px] relative h-[480px] mb-[67px] mt-[26px]'>
          <Image className='absolute top-10 rounded-lg right-0 shadow-custom shadow-lines-light h-[490px] w-[265px] object-cover' width={265} height={490} src={`https://cdn.getter.uz/api/v1/media/${product.media[0]}/open`} alt="" />
          <div className='w-[100%] h-[100%] overflow-hidden'>
            <Image className='' width={800} height={490} src={`https://cdn.getter.uz/api/v1/media/${product.media[0]}/open`} alt="" />
          </div>
        </div>
          <h2 className='text-[16px] leading-[19px] font-medium	 mb-[15px]'>
            Использованные технологии
          </h2>
          <ul className='w-[586px] flex items-center flex-wrap gap-[2px] text-[16px] leading-[19px]'>
            {
              product.technologies.map((tech) => (
                <li className='p-[10px] bg-pink-light rounded text-technalogies' key={tech.id}>
                  {
                    tech.title
                  }
                </li>
              ))
            }
          </ul>
          <h3 className='mt-[53px] mb-[17px]'>
            Описание
          </h3>
          <p className='w-[854px] text-[22px] leading-[28px]'>
          Создайте идеальный сайт для вашего бизнеса с нашей платформой! Мы предлагаем готовые шаблоны, которые можно быстро адаптировать под ваш бренд. Высокое качество, доступная цена и полная кастомизация помогут вам выделиться среди конкурентов и привлечь новых клиентов. Начните уже сегодня и дайте вашему бизнесу лучший сайт!
          </p>
          <h2 className='text-[16px] leading-[19px] font-medium	 mb-[15px] mt-[70px]'>
            Разработчики
          </h2>
          <ul className='flex gap-[10px] items-center'>
            <li className='w-[80px] h-[80px] bg-slate-500 rounded-full'></li>
            <li className='w-[80px] h-[80px] bg-slate-500 rounded-full'></li>
            <li className='w-[80px] h-[80px] bg-slate-500 rounded-full'></li>
            <li className='w-[80px] h-[80px] bg-slate-500 rounded-full'></li>
            <li className='w-[80px] h-[80px] bg-slate-500 rounded-full'></li>
          </ul>
      </section>
    </>
  );
};

export default Info;
