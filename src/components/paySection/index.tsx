import Image from 'next/image';
import { FC } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";

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

const conditions = [
  "Система управления сайтом (CMS)",
  "Обслуживание сайта (4 месяца)",
  "– Хостинг (размещение на сервере)",
  "– Место для сайта 2000Мб",
  "– Домен в зоне (RU/UZ) в подарок",
  "– Техническая поддержка",
  "– Резервное копирование данных",
  "– Бесплатная телефонная линия поддержки",
  "Сервисы увеличения продаж",
  "– Ведение контекстной рекламы",
  "– CRM система и воронки продаж",
  "– Онлайн-консультант для сайта",
  "– E-mail рассылки"
];

const Pay: FC<DetailsProps> = ({ product }) => {
  return (
    <>
      <section className=''>
        <div className='flex items-center'>
          <button className='flex items-center mr-[27px]'>
            <IoMdHeartEmpty className='mr-1'/>
            Избранные
          </button>
          <a className='text-[15px] leading-[18px] text-white bg-pink py-3 px-5 rounded' href="tel:+998946093444">
            Заказать этот сайт
          </a>
        </div>
        <div className='w-[342px] h-[756px] border border-lines mt-[18px] px-5 pt-[35px]'>
         <div className='mb-2 font-medium text-[16px] leading-[19px] '>
          <h3>
            {product.categories[0].title}
          </h3>
          <h3>
            {product.title}
          </h3>
         </div>
         <div className='rounded bg-lines overflow-hidden'>
          <span className='pt-[14px] pr-[22px] pb-[10px] pl-[15px] flex items-center justify-between'>
            <p className='text-[13px] leading-[15px]'>Цена (одноразовый):</p>
            <p>{product.licensedPrice} сум</p>
          </span>
          <button className='bg-yellowes py-3 w-[100%] text-[13px] leading-[15px] font-semibold'>
            Купить за один клик
          </button>
          </div>
          <div className='mb-[35px] mt-[26px] px-3'>
            <h2 className='mb-[15px] font-medium text-[16px] leading-[19px]'>
              Способы оплаты
            </h2>
            <span className='flex items-center justify-between'>
              <span className='bg-lines rounded py-[13px] px-[17px]'>
                <Image width={100} height={44} src="/payme.png" alt="" />
              </span>
              <span className='bg-lines rounded py-[13px] px-[17px]'>
                <Image width={100} height={44} src="/uzum.png" alt="" />
              </span>
            </span>
          </div>
          <div>
            <h3 className='font-medium text-[16px] leading-[19px] mb-[7px]'>
              Условии
            </h3>
            <ul>
              {
                conditions.map((item, index)=> (
                  <li className='text-[13px] leading-[24px]' key={index}>
                    {
                      item
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pay;
