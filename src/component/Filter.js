import React, { useState } from 'react'
import { FilterContainer, Label, Option, Select, } from './styles/filter.styles';
function Filter(prop) {
  const [SelectCategory, setSelectCategory] = useState('')
  let SelectCatagoryMethod = (event) => {
    setSelectCategory(event.target.value)
    toproduct(event.target.value);
  }
  const toproduct = (data) => {

    prop.toproduct(data);
  }
  console.log(SelectCategory)

  return (

    <FilterContainer>
      <Label>Filter by category:</Label>
      <Select value={SelectCategory} onChange={SelectCatagoryMethod}>
        <Option value="All">All</Option>
        <Option value="smartphones">Smartphones</Option>
        <Option value="laptops">Laptops</Option>
        <Option value="skincare">Skincare</Option>
        <Option value="groceries">Groceries</Option>
        <Option value="home-decoration">Home Decoration</Option>
      </Select>
    </FilterContainer>
  )
}

export default Filter
