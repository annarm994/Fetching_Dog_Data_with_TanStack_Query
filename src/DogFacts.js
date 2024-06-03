import React from 'react';
import { useQuery } from '@tanstack/react-query';

const DogFacts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'dogFacts',
    queryFn: () => fetch('https://dogapi.dog/api/v2/facts').then((res) => res.json())
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  if (!data || !data.data || !Array.isArray(data.data)) {
    return <div>No dog facts found</div>;
  }

  return (
    <div>
      <h2>Dog Facts</h2>
      <ul>
        {data.data.map((fact, index) => (
          <li key={index}>{fact.attributes.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogFacts;