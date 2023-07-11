import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../service/stockAPI";
import { dataFilter, initStock } from "../utils/helper";

import styled from "styled-components";
import SummaryRow from "./SummaryRow";
import { useState } from "react";

interface stockType {
  code?: string;
  start?: number;
  lowest?: number;
  highest?: number;
  current?: number;
}

const Table = styled.div`
  font-size: 1.4rem;
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  padding: 1.6rem 2.4rem;
`;

let init = true;

function Summary() {
  const [currentData, setCurrentData] = useState<stockType[]>([]);

  const { isLoading, data: newStockData } = useQuery({
    queryKey: ["stock"],
    queryFn: async () => {
      const newData = await fetchData();

      if (!newData) return;

      if (init && newData) {
        const initData = initStock(newData);
        setCurrentData([...initData]);
        if (currentData.length > 0) init = false;
      }

      if (!init) {
        setCurrentData([...dataFilter(newData, currentData)]);
      }
      return newData;
    },
    refetchInterval: 5000,
  });

  if (isLoading || !newStockData) return <p>fetching...</p>;

  return (
    <>
      <Table role="table">
        <TableHeader role="row">
          <div>Stock</div>
          <div>Starting</div>
          <div>Lowest</div>
          <div>Highest</div>
          <div>Current</div>
          <div></div>
        </TableHeader>
        {currentData.map((stock) => (
          <SummaryRow
            key={stock.code}
            code={stock.code}
            start={stock.start}
            lowest={stock.lowest}
            highest={stock.highest}
            current={stock.current}
          />
        ))}
      </Table>
    </>
  );
}

export default Summary;
