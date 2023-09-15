import React, { useState } from "react";
import {
  TableCell,
  TableSortLabel,
  Paper,
  TextField,
  Tooltip,
  Popover,
} from "@material-ui/core";
import Dropdown from "../../Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  filterIcon: {
    position: "relative",
    float: "right",
    cursor: "pointer",
  },
  textField: {
    marginTop: "10px",
  },
}));

export default function TableHeaderData({
  order,
  orderBy,
  header,
  sortText,
  filter,
  sort,
  handleSort,
  cellMinWidth,
  handleFilterOption,
  handleClearFilterOption,
}) {
  const classes = useStyles();
  const [filterType, setFilterType] = useState("");
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const filterArr = [
    { text: "Clear Filter", value: "clear" },
    { text: "Contains", value: "contains" },
    { text: "Not contains", value: "notContains" },
    { text: "Equal", value: "equal" },
    { text: "Not equal", value: "notEqual" },
    { text: "Start with", value: "startWith" },
    { text: "End with", value: "endWith" },
  ];

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    handleSort(isAsc ? "desc" : "asc", property);
  };

  const handleClose = () => {
    if (filterType === "clear") {
      handleClearFilterOption(sortText);
      setFilterData("");
      setFilterType("");
    } else if (filterType && filterData) {
      handleFilterOption(sortText, filterType, filterData);
    }
    setOpen(false);
  };

  return (
    <>
      <TableCell
        stickyHeader
        style={cellMinWidth ? { minWidth: cellMinWidth } : { minWidth: 150 }}
      >
        {sort ? (
          <TableSortLabel
            active={orderBy === sortText}
            direction={orderBy === sortText ? order : "asc"}
            onClick={() => handleRequestSort(sortText)}
          >
            {header}
          </TableSortLabel>
        ) : (
          <>{header}</>
        )}
        {filter && (
          <Tooltip
            title={filterData === "" ? "" : `${filterType} - ${filterData}`}
          >
            <MenuIcon
              className={classes.filterIcon}
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
                setOpen((prev) => !prev);
              }}
            />
          </Tooltip>
        )}
      </TableCell>

      <Popover
        open={open}
        anchorEl={anchorEl}
        placement={"bottom"}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper style={{ padding: "10px" }}>
          <Dropdown
            data={filterArr}
            handleChange={(e) => {
              setFilterType(e.target.value);
            }}
            value={filterType}
            label="Filter"
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            value={filterData}
            onChange={(e) => {
              setFilterData(e.target.value);
            }}
          />
        </Paper>
      </Popover>
    </>
  );
}
