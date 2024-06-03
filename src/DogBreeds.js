// DogBreeds.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const DogBreeds = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'dogBreeds',
    queryFn: () => fetch('https://dogapi.dog/api/v2/breeds').then((res) => res.json())
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  if (!data || !data.data || !Array.isArray(data.data)) {
    return <div>No dog breeds found</div>;
  }

  return (
    <div>
      <h2>Dog Breeds</h2>
      <ul>
        {data.data.map((breed) => (
          <li key={breed.id}>
            <h3>{breed.attributes.name}</h3>
            <p>{breed.attributes.description}</p>
            <p>Life Span: {breed.attributes.life.min}-{breed.attributes.life.max} years</p>
            <p>Male Weight: {breed.attributes.male_weight.min}-{breed.attributes.male_weight.max} kg</p>
            <p>Female Weight: {breed.attributes.female_weight.min}-{breed.attributes.female_weight.max} kg</p>
            <p>Hypoallergenic: {breed.attributes.hypoallergenic ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogBreeds;