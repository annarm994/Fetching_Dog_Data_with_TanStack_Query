// DogGroups.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const DogGroups = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'dogGroups',
    queryFn: () => fetch('https://dogapi.dog/api/v2/groups').then((res) => res.json())
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  if (!data || !data.data || !Array.isArray(data.data)) {
    return <div>No dog groups found</div>;
  }

  return (
    <div>
      <h2>Dog Groups</h2>
      <ul>
        {data.data.map((group) => (
          <li key={group.id}>
            <h3>{group.attributes.name}</h3>
            <p>{group.attributes.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogGroups;