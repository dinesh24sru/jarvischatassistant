import React from "react";
import { TableCell } from "@material-ui/core";

export default function TableSpanHeaderData({ headerName, spanHeader }) {
  let style = { minWidth: 150, textAlign: "center" };
  if (spanHeader[headerName].length > 1) {
    style["borderLeft"] = "1px solid";
    style["borderRight"] = "1px solid";
  }

  return (
    <>
      <TableCell
        stickyHeader
        style={style}
        colSpan={spanHeader[headerName].length}
      >
        {spanHeader[headerName].length > 1 ? headerName : ""}
      </TableCell>
    </>
  );
}
