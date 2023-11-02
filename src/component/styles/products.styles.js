import styled from "styled-components";


export const Productbox = styled.div`
  display: grid;
  background-color: #334155;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
justify-items:center;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }

`
export const Div=styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin: 20px;
  padding:5px;
  background-color:#0f172a;
  border-radius:20px;
  color:wheat;
`




export const Product = styled.div`
  background-color: #0f172a;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 5px;
  color: #7fd7db;
  border-radius: 20px;
  padding: 15px;
`;
export const Img=styled.img`
width: 200px;
height: 150px;
overflow: hidden;
border-radius:15px;
`
export const Ptag= styled.p`
word-wrap:wrap;
`