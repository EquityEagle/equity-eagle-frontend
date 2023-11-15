import React, { useState } from "react";
import { StyledSetupItem } from "../../styles/components/styled";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { tradesdata } from "../../constants/test";
import { FiEdit } from "react-icons/fi";
import { CustomTitle } from "../../lib";
import { FaEye } from "react-icons/fa";

const Trades = () => {
  const [isHoverd, setIsHovered] = useState(false);
  return (
    <StyledSetupItem className="mt-[5rem]">
      <Sheet variant="outlined">
        <Table variant="soft" borderAxis="bothBetween">
          <thead>
            <tr>
              <th>Pair</th>
              <th>Type</th>
              <th>Lots</th>
              <th>Profit</th>
              <th>Edit</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {tradesdata.map((row) => (
              <tr key={row.date}>
                <td>{row.pair}</td>
                <td>{row.type}</td>
                <td>{row.lots}</td>
                <td>{row.profit}</td>

                <td>
                  <FiEdit size={20} className="cursor-pointer" />
                </td>
                <td>
                  <FaEye size={20} className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </StyledSetupItem>
  );
};

export default Trades;
