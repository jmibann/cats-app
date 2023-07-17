/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

const BASE_URL = 'https://cataas.com';


const useCatImage = ({ fact }: { fact: string }) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const getImageUri = (str: string) => `https://cataas.com/cat/says/${str}?size=50&color=red&json=true`;

  useEffect(() => {
    if (fact.length) {
      const firstThreeWords = fact.split('').slice(0, 3).join(' ');

      fetch((getImageUri(firstThreeWords)))
        .then(res => res.json())
        .then(({ url }) => setImageUrl(url as string));
    }
  }, [fact])

  return `${BASE_URL}${imageUrl as string}`
};

export default useCatImage;