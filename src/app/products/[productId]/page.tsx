'use client';

import Details from '@/components/details';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

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

const Page: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const { productId } = params;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<Product>(`https://api.getter.uz/sale-product/${productId}`);
      if (response.status === 200) {
        setProduct(response.data);
      } else {
        console.error('Unexpected response status:', response.status);
        setError('Unexpected response data format');
      }
    } catch (error) {
      console.error('Error making GET request:', error);
      setError('Error fetching product data');
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId, fetchData]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : product ? (
        <Details product={product} />
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default Page;
