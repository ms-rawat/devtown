import React, { useEffect, useState } from 'react';
import { Productbox, Ptag, Img, Product, Div } from './styles/products.styles';
import Filter from './Filter';
import Sort from './Sort';
import Pagination from './Pagination';

function Products() {
  const [goods, setGoods] = useState([]);
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('none');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    let fetchGoods = () => {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => setGoods(data.products));
    };

    fetchGoods();
  }, []);

  const datafromfilterOption = (data) => {
    setCategory(data);
    setCurrentPage(1); // Update currentPage when the filter changes
  };

  const datafromSortOption = (data) => {
    setSortOrder(data);
    setCurrentPage(1); // Update currentPage when the sort order changes
  };

  // Filter and sort the products when either category or sort order changes
  const filteredProducts = goods.filter((item) => category === 'All' || item.category === category);

  const sortedProducts = [...filteredProducts];
  if (sortOrder === 'low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <Div>
        <Filter toproduct={datafromfilterOption} />
        <Sort toProduct2={datafromSortOption} />
      </Div>
      <Productbox>
        {currentProducts.map((item, index) => (
          <Product key={item.id}>
            <Img src={item.thumbnail} alt="thumbnail" />
            <h3>{item.title}</h3>
            <h4> Price: ${item.price}</h4>
            <Ptag>{item.description}</Ptag>
          </Product>
        ))}
      </Productbox>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}

export default Products;
