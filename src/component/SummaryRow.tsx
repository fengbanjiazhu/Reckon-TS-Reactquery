import { styled } from "styled-components";

interface props {
  code?: string;
  start?: number;
  lowest?: number;
  highest?: number;
  current?: number;
}

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  border-top: 1px solid black;
`;

const Price = styled.div`
  font-weight: 200;
`;

function SummaryRow({ code, start, lowest, highest, current }: props) {
  return (
    <TableRow role="row">
      <h4>{code}</h4>
      <Price>{start}</Price>
      <Price>{lowest}</Price>
      <Price>{highest}</Price>
      <Price>{current}</Price>
    </TableRow>
  );
}

export default SummaryRow;
