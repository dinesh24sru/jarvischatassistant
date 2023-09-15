import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";
import "./table.css";
import TableHeaderData from "./TableHeaderData";
import TableSpanHeader from "./TableSpanHeader";
import _ from "lodash";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  filterIcon: {
    position: "relative",
    float: "right",
    cursor: "pointer",
  },
}));

export default function MaterialTable(props) {
  const classes = useStyles();
  const [filter, setFilter] = useState({});

  const handleFilterOption = (shortName, filterType, filterData) => {
    const data = { ...filter };
    data[shortName] = { filterType, filterData };
    setFilter(data);
    props.handleFiter(data);
  };

  const handleClearFilterOption = (shortName) => {
    const data = { ...filter };
    delete data[shortName];
    setFilter(data);
    props.handleFiter(data);
  };

  const spanHeader = _.groupBy(props.header, "subSelect");

  return (
    <Paper className={classes.paper}>
      <TableContainer
        component={Paper}
        style={{ overflowX: "auto", minHeight: "200px", maxHeight: "500px" }}
      >
        <Table>
          <TableHead>
            {props.columnSpan && (
              <TableRow>
                {Object.keys(spanHeader).map((h, i) => {
                  return (
                    <TableSpanHeader
                      key={i}
                      spanHeader={spanHeader}
                      headerName={h}
                    />
                  );
                })}
              </TableRow>
            )}
            <TableRow>
              {props.header.map((h, i) => {
                return (
                  <TableHeaderData
                    key={i}
                    {...h}
                    order={props.order}
                    orderBy={props.orderBy}
                    handleSort={props.handleSort}
                    cellMinWidth={props.cellMinWidth}
                    handleFilterOption={handleFilterOption}
                    handleClearFilterOption={handleClearFilterOption}
                  />
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow>
                {props.header.map((h, index) => {
                  return row[h.sortText]?.action ? (
                    <TableCell
                      key={index}
                      onClick={() => {
                        row[h.sortText].action();
                      }}
                    >
                      {typeof row[h.sortText] === "string" ||
                      typeof row[h.sortText] === "number"
                        ? row[h.sortText]
                        : row[h.sortText].icon}{" "}
                    </TableCell>
                  ) : (
                    <TableCell key={index}>{row[h.sortText]} </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.count}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onPageChange={props.onPageChange}
        onRowsPerPageChange={props.onRowsPerPageChange}
      />
    </Paper>
  );
}
