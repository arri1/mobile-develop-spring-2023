import React, {useMemo} from 'react';

const Lab3: React.FC = () => {


  const expensiveOperation = (data) => {
    console.log('Running expensive operation...');
    // Долгая операция, например, сортировка массива:
    return data.sort((a, b) => a - b);
  };

  const sortedItems = useMemo(() => expensiveOperation(items), [items]);

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Lab3;