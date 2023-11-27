import React, { useState } from 'react';
import { FilterContainer, FilterInput, FilterLabal } from './Filter.styled';

const Filter = ({ onChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (evt) => {
    const newValue = evt.target.value;
    setFilterValue(newValue);
    onChange(newValue);
  };

  return (
    <FilterContainer>
      <FilterLabal>
        Find contacts by name:
        <FilterInput type="text" value={filterValue} onChange={handleFilterChange} />
      </FilterLabal>
    </FilterContainer>
  );
};

export default Filter;
