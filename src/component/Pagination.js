import styled from 'styled-components';

const PaginationWrapper = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin: 20px;
  padding:5px;
  background-color:#0f172a;
  border-radius:20px;
`;
const List=styled.ul`
 display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`
const Item=styled.li`
 margin: 0 5px;
    cursor: pointer;

    &.active {
      button.page-link {
        background-color: #007bff;
        color: #fff;
        border-color: #007bff;
      }
    }
`

const Button=styled.button`
background-color: #fff;
    border: 1px solid #ddd;
    color: #007bff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }
`

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationWrapper>
      <List >
        {pageNumbers.map((pageNumber) => (
          <Item key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
            <Button onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </Button>
          </Item>
        ))}
      </List>
    </PaginationWrapper>
  );
}

export default Pagination;
