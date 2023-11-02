import React, { useState } from 'react'
import { SortContainer,Label,Option,Select } from './styles/sort.styles';

function Sort(props) {
    const [SortOption,setSortOption]=useState('');

const SortingOpition=(event)=>{
    setSortOption(event.target.value);
toProduct2(event.target.value)
}
const toProduct2=(SortOption)=>{
props.toProduct2(SortOption);
}
  return (
    <SortContainer>
        <Label>Sort products : </Label>
        <Select value={SortOption} onChange={SortingOpition} >
            <Option value="none">none</Option>
            <Option value="low-to-high">price low to high</Option>
            <Option value="high-to-low">price high to low</Option>
        </Select>
    </SortContainer>
  )
}

export default Sort
