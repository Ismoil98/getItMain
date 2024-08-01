import { FC } from 'react';
import Info from '../infoSection/index';
import Pay from '../paySection';
import TopNavbar from '../topNavbar';

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

const Details: FC<DetailsProps> = ({ product }) => {
  return (
    <>
      <TopNavbar />
      <section className='container flex justify-between'>
        <Info product={product} />
        <Pay  product={product} />
      </section>
    </>
  );
};

export default Details;
